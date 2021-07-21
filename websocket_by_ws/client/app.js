const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const ws = new WebSocket('ws://localhost:3000');
//этот WebSocket- от броузера, а не тот, что мы ставили by npm
//тот WebSocket, что ставили by npm,- для сервера
//ws://localhost:3000 - url сервера

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
  ws.send(input.value);
  input.value = ''
})

ws.onopen = () => setStatus('onLine');            //подключение произошло.
ws.onclose = () => setStatus('onLine is shuted'); //подключение завершилось

//когда на сервере запускается "ws.send('Ws is connected!')"
ws.onmessage = response => printMessage(response.data);