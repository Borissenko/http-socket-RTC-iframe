//запускаем командой - node expressServer

let app = require('express')();
let http = require('http').Server(app);

let server = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

http.listen(3000, () => {
  console.log('Listening on port *: 3000');
});


server.on('connection', (socket) => {
  socket.emit('connections-length', Object.keys(server.sockets.connected).length);

  socket.on('disconnect', () => {
    console.log("A user disconnected");
  });

  // socket.on('chat-message', (data) => {
  //   socket.broadcast.emit('chat-message', (data));  //посылаем всем, кроме свеже подключенного
  // });
  socket.on('chat-message', (data) => {
    server.emit('chat-message', (data));   //посылаем абсолютно всем
  });

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', (data));
  });

  socket.on('stopTyping', () => {
    socket.broadcast.emit('stopTyping');
  });

  socket.on('joined', (data) => {
    socket.broadcast.emit('joined', (data));
  });

  socket.on('leave', (data) => {
    socket.broadcast.emit('leave', (data));
  });
});