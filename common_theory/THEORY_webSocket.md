# WebSocket

Обмена данными между браузером и СЕРВЕРОМ через постоянное соединение.
Нет ограничений, связанных с кросс-доменными запросами.
Данные передаются в виде «пакетов», без разрыва соединения и дополнительных HTTP-запросов.

Но для создания соединения посылается все тот же http-запрос.

Поток данных в WebSocket состоит из «фреймов», фрагментов данных,
В браузере мы напрямую работаем только с текстовыми и бинарными фреймами (Blob или ArrayBuffer).

## открыть веб-сокет-соединение
let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello", ["soap", "wamp"])   // ["soap", "wamp"] - необязательный аргумент. Означает, что мы будем передавать не только произвольные данные, но и данные в протоколах SOAP или WAMP

## закрыть соединение
// закрывающая сторона:
socket.close(1000, "работа закончена")   //КОДЫ - спец предопределенные, общепринятые. Как коды ощибок в HTPP.

// другая сторона:
socket.onclose = event => {
  // event.code === 1000
  // event.reason === "работа закончена"
  // event.wasClean === true (закрыто чисто)
};



## события соединения
socket.onopen = function(e) {
alert("[open] Соединение установлено");
alert("Отправляем данные на сервер");
socket.send("Меня зовут Джон");
};

socket.onmessage = function(event) {
alert(`[message] Данные получены с сервера: ${event.data}`);
};

socket.onclose = function(event) {
if (event.wasClean) {
alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
} else {
// например, сервер убил процесс или сеть недоступна
// обычно в этом случае event.code 1006
alert('[close] Соединение прервано');
}
};

socket.onerror = function(error) {
alert(`[error] ${error.message}`);
};

# Методы для передачи данных
## отправка
socket.send(body)
body - строка или Blob/ArrayBuffer


## получение
socket.bufferType = "arraybuffer"   //по умолчанию оно равно "blob", прописываем, если получаем не строку, и не blob.
socket.onmessage = (event) => {
// event.data является строкой (если текст) или arraybuffer (если двоичные данные)
};








