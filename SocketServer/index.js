const app = require('express');
const server = require('http').createServer(app);

var io = require('socket.io')(server, {
    cors: {
        origin: ['http://localhost:4200']
    }
});

io.on('connection', (socket) => {
    console.log('user connected');
    io.emit('testEvent', "Moin");
});

server.listen(3000, () => {
  console.log('listening on *:4200');
});