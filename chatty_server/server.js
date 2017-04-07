const express = require('express');
const WebSocket = require('ws');
const SocketServer = require('ws').Server;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Broadcast to all.
wss.broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

function broadcastConnectionNumber(connectionCount){
  let outgoingMessage = {
    type: 'numberOfConnections',
    connections: connectionCount
  }
  wss.broadcast(JSON.stringify(outgoingMessage)); 
}

// Assign colors to each user
const colors = ['#ABCDEF', '#46aa4c', '#2758dd', '#dd1f1f'];
let currentColor = {color: colors[Math.floor(Math.random() * colors.length)]};
let userHasChanged;

function handleMessage(message){
  let outgoingMessage = {}
  const uuidV1 = require('uuid/v1');

  if(userHasChanged) {
    currentColor = {color: colors[Math.floor(Math.random() * colors.length)]};
  }
  switch(message.type){
    case 'postMessage':
      outgoingMessage = {
        type: 'incomingMessage',
        id: uuidV1(),
        username: message.username,
        content: message.content,
        color: currentColor
      }
      userHasChanged = false;
      return outgoingMessage;
    case 'postNotification':
      outgoingMessage = {
        type: 'incomingNotification',
        id: uuidV1(),
        content: message.content,
      }
      userHasChanged = true;
      return outgoingMessage;
    default:
    // show an error in the console if the message type is unknown
    throw new Error('Unknown event type', message.type);
  }
}

// Use a sequence of unique IDs for every socket
let sockets = [];

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  // Keep track of how many connections are open
  sockets.push(ws);
  broadcastConnectionNumber(sockets.length);

  ws.on('message', (message) => {
    let incomingMessage = JSON.parse(message);
    let outgoingMessage = handleMessage(incomingMessage)
    wss.broadcast(JSON.stringify(outgoingMessage)); 
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    sockets.pop();
    broadcastConnectionNumber(sockets.length);
  });
});
