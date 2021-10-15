# JSON-RPC
## RPC означает “remote procedure call” (удаленный вызов процедуры)

— протокол удалённого вызова ПРОЦЕДУР, действий, методов(!)(как и SOAP), 
использующий JSON для кодирования сообщений в стиле RPC (Remote Procedure Call).

Атомарной единицей API сервиса является ОПЕРАЦИЯ.
API строится путем определения публичных методов, затем эти методы вызываются с аргументами


## Методика  JSON-RPC
это просто набор функций, но в контексте HTTP_API,
- обозначаем МЕТОД в URL,
- обозначаем аргументы в строке запроса или в теле запроса.


# К слову, 
Если API проекта – это в основном ДЕЙСТВИЯ, то возможно, это должен быть RPC.
Если API проекта в основном CRUD (создание, чтение, обновление, удаление) и манипулирует связанными ДАННЫМИ, то возможно, он должен быть REST.


Фишка - это Batch-запрос!

- это stateless-протокол
- на сервере есть один единственный endpoint, который принимает запросы,
- GET или POST (только), где GET - для получения информации, а POST для всего остального
вместо DEL используем POST /deleteFoo, с телом { “id”: 1 }


Запрос осуществляется by HTTP
POST
Content-Type: application/json   // с указанием заголовка

Тело запроса:
{
  "jsonrpc": "2.0",                             // required, всегда 2.0
  "id": "e3690667-ad8f-48bf-be19-40cec933c05b", // required, всегда uuid version 4
  "method": "report.ready.index",               // <<<<<< required, название операции, разделитель всегда точка
  "params": {
    // not required, список параметров операции в формате, описанном в секции request ее спецификации
  }
}

Ответы вида:
{"jsonrpc": "2.0", "result": {"likes": 123}, "id": 1}

Если возникает ошибка — ответ об ошибке:
{"jsonrpc": "2.0", "error": {"code": 666, "message": "Post not found"}, "id": "1"}    //"code": 666 - кастомный(!).





#
https://github.com/gosdev/json-rpc
https://meline.lviv.ua/development/other/rest-%D0%B8-rpc-%D0%B4%D0%BB%D1%8F-http-api/
https://medium.com/nuances-of-programming/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5-%D0%BE-json-rpc-b4ad927edcaf   <<< есть код примера!!!

https://www.npmjs.com/package/express-json-rpc-router
https://meline.lviv.ua/development/other/rest-%D0%B8-rpc-%D0%B4%D0%BB%D1%8F-http-api/






