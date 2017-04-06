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

function handleMessage(message){
  let outgoingMessage = {}
  const uuidV1 = require('uuid/v1');
  switch(message.type){
    case 'postMessage':
      outgoingMessage = {
        type: 'incomingMessage',
        id: uuidV1(),
        username: message.username,
        content: message.content 
      }
      return outgoingMessage;
    case 'postNotification':
      outgoingMessage = {
        type: 'incomingNotification',
        id: uuidV1(),
        content: message.content 
      }
      return outgoingMessage;
    default:
    // show an error in the console if the message type is unknown
    throw new Error('Unknown event type', message.type);
  }

}

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    let incomingMessage = JSON.parse(message);
    let outgoingMessage = handleMessage(incomingMessage)
    wss.broadcast(JSON.stringify(outgoingMessage)); 
});

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});
