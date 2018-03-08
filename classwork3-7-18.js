var http = require("http");
var PORT = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
	response.end("It Works!! Path" + request.url);

}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("YOU GOOD", PORT)
});

server.listen(PORT2, function() {
	console.log("YOU SUCK", PORT2)
});