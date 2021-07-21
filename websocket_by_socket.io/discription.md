==  Socket.io ==
https://github.com/socketio/socket.io-client
Для СТАРЫХ броузеров, которые еще не поддерживают сокеты, лечим их, подключая на клиенте библиотеки,
заменяющие сокет другими технологиями- полинг или лонгПолинг.

Наиболее популярна библиотека Socket.io
npm i  socket.io --save

она используется и на сервере, и на клиенте- это ее особенность

ТЕОРИЮ Socket.io см. в 
- server/socketServer.js
- client_html/socketClient.js
- https://github.com/socketio/socket.io-client

1. пишем сервер 
- socketServer.js Это сервер на базе вкстроенного в socket.io сервера
- expressServer.js Это сервер на базе express.

2. пишем клиента
а) на Vue
- в папке client_vue
очень сырой и с ошибками, но принципы посмотреть можно

б) на html
- в папке client_html
1\ Пишем JS клиента - client_html/socketClient.js, 
и подключаем его в index.html
<script src="socketClient.js"></script>

2\ Подключаем для JS клиента функцию io        
Для простоты копируем node_modules/socket.io-client/dist/socket.io.js в папку public,
и в index.html ВЫШЕ(!), чем прописано подключение скрипта socketClient.js, прописываем
<script src="socket.io.js"></script>

или
<script src="/socket.io/socket.io.js"></script>
-и файл будет искаться в node_modules, расположенном рядом с index.html

или импортируем библиотеку онлайн
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.4/socket.io.min.js"></script>
или
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></script>

или скачать клиентскую библиотеку (NB!)
https://github.com/socketio/socket.io-client
      
      
3. запускаем сервер из папки server -  
node socketServer
или
node expressServer

4. запускаем клиента 
клиента можно запустить в броузере напрямую, но тогда не будет само обновления страницы
Поэтому лечше запустить через сервер (например- http-server)

а) из папки client_html запускаем файл index.html
http-server

б) из папки client_vue (работает, но в консоле сервера- пояпляется, no faund...)
запускаем файл index.html
http-server





////////////////
источники
https://coursehunter.net/course/znakomstvo-s-websocket
https://medium.com/nuances-of-programming/%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D1%87%D0%B0%D1%82-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC%D0%B5-%D1%80%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8-%D1%81-vue-js-socket-io-%D0%B8-node-js-9035875983cb
https://coursehunter.net/course/real-time-chat-with-node-js-socket-io-and-vue-js





