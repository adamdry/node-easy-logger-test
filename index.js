var http = require('http');
var easyLogger = require('node-easy-logger')({
    enable: false
});

easyLogger.warn('###### test logger message!');

function handleRequest(request, response) {
    response.end('It Works!! Path Hit: ' + request.url);
}

http.createServer().listen(5924, function(){
  console.log('listening on *:5924');
});