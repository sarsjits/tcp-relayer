"use strict";

var net = require("net");
var server = net.createServer();

var clients = [];

server.on("connection", function(socket) {
	clients.push(socket);
	if(clients.length == 1) {
		console.log("Waiting for one more TCP connection.");
	} else {
		console.log("Condition met.");
	}
	
	socket.on("data", function(data) {
		if(clients.length < 2) {
			console.log("For data to be transmitted, two TCP clients must be connected.");
		} else if(clients.length == 2) {
			var idx = clients.indexOf(socket);
			var clientToSend = idx ^ 1;
			clients[clientToSend].write(socket.remoteAddress + ':' + socket.remotePort + ':' + data);
		}
	});
	
	socket.on("close", function() {
		console.log("Connection closed: " + socket.remoteAddress + ":" + socket.remotePort);
		var idx = clients.indexOf(socket);
		clients.splice(idx,1);
		if(clients.length == 0) {
			console.log("No client is currently connected. Waiting for new connection.");
		} else if (clients.length == 1) {
			console.log("Waiting for one more client to be connected.");
		}
	});
	
	socket.on("error", function(err) {
		
	});
});

server.listen(3000, function() {
	console.log("The server is listening on %j", server.address());
});
