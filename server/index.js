import { WebSocket, WebSocketServer } from "ws";

const socketServer = new WebSocketServer({port: 8080});
socketServer.on('connection', connection => {
    console.log('New user!');

    connection.on('message', message => {
        console.log(`Client sent ${message}`);
        connection.send(`I got message '${message}, thanks'`);
    })

    connection.on('close', ()=> {
        console.log('User disconnected');
       
    })
})