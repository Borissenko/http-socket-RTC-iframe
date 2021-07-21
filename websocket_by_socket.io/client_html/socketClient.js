const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');


const socketClient = io('http://localhost:3000')  // URL можно не указывать.... Но порт- именно 3000 (!)
// const socketClient = io()

//io - будет доступна везде, т.к. мы вставили socket.io.js в index.html

//сначало подключаемся по протоколу 'http'(!) - http(!)://localhost:3000',
//а далее библиотека подключиться по протоколу ws, если он существует у броузера клиента.


function setStatus(value) {  //изменяем  строчку "статус" на странице
  status.innerHTML = value;
}

function printMessage(value) {  //выводим сообщение на страницу
  const li = document.createElement('li');

  li.innerHTML = value;
  messages.appendChild(li);
}


form.addEventListener('submit', event => {  //ентер по полю инпута полылает содержимое инпута на сервер
  event.preventDefault();

//посылаем на сервер, мной придуманное событие socket:
  socketClient.emit('chat-message', input.value);

  input.value = ''
})

//стандартные МЕСТНЫЕ события на клиенте- в socketClient
socketClient.on('connect', () => setStatus('onLine'));              //подключение произошло.
socketClient.on('disconnect', () => setStatus('onLine is shated')); //подключение завершилось

//мной придуманные события socket, распостраняются от сервера к клиенту
socketClient.on('chat-message', messege => printMessage(messege))
socketClient.on('joined', messege => printMessage(messege))

// Т.о.
//   посылаем:
// socketClient.emit('chat-message', input.value);  //A.==>> server  Исходящие события
// названия событий мы здесь сами придумываем
//
//   получаем по "клику" на сервере:
// socketClient.on('joined', messege => printMessage(messege)) //входящие события



