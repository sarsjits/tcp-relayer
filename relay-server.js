"use strict";

var net = require("net");
var server = net.createServer();

var clients = [];
var buffers = [];

server.on("connection", function(socket) {
	clients.push(socket);
	if(clients.length > 2) {
		clients.splice(2,1);
		console.log("There are " + clients.length + " connections already");
		console.log("Dropping off the connection from: " + socket.remoteAddress + ":" + socket.remotePort);
		socket.destroy();
	}
	if(clients.length === 1) {
		console.log("Waiting for one more TCP connection.");
	} else {
		console.log("Condition met.");
	}
	
	socket.on("data", function(data) {
		var idx = clients.indexOf(socket);
		if(clients.length < 2) {
			console.log("For data to be transmitted, two TCP clients must be connected.");
			console.log("Currently buffering the data.");
			buffers.push(data);
		} else if(clients.length === 2 && idx !== -1) {
			if(buffers.length !== 0) {
				for(var i=0;i<buffers.length;++i) {
					clients[1].write(clients[0].remoteAddress + ":" + clients[0].remotePort + buffers[i]);
				}
				buffers = [];
			}
			var clientToSend = idx ^ 1;
			clients[clientToSend].write(socket.remoteAddress + ':' + socket.remotePort + ':' + data);
		}
	});
	
	socket.on("close", function() {
		console.log("Connection closed: " + socket.remoteAddress + ":" + socket.remotePort);
		var idx = clients.indexOf(socket);
		console.log("Index while closing: " + idx);
		if(idx !== -1)
			clients.splice(idx,1);
		if(clients.length === 0) {
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
