// сервер на базе вкстроенного в socket.io сервера
//запускаем командой - node socketServer.js

const SocketServer = require('socket.io');

const server = new SocketServer(3000);  //создали сервер с портом 3000
//срабатывает ТОЛЬКО, если указали порт именно 3000  (!????)

//server.on - местное событие в server'e
server.on('connection', socket => {   //обект socket представляет собой соединение с клиентом
  console.log("Кто-то подсоединился к серверу")
  socket.on('chat-message', messege => {      //Пришло от клиента. Названия событий мы здесь можем сами придумывать
    server.emit('chat-message', messege);     //полученное сообщение передаем ВСЕМ клиентам
  });

  socket.emit('joined', 'Hi!')    //посылаем ТОЛЬКО данному свежеПОДСОЕДИНЕННОМУ новому клиенту
  // socket.broadcast.emit('message', 'User ' + user + ' connected');  //всем КРОМЕ того, кто сейчас подключился
  // server.emit('message', 'User ' + user + ' connected');   //посылаем ВСЕМ клиентам
});
