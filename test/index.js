var sinon = require("sinon");
var relay = require("../relay-server");

describe('Relay Server',function() {
	it('should accept first tcp clients connection',function() {
		
	});
	it('should accept second tcp clients connection', function() {
	
	});
	it('should reject any more connections if two clients are already connected', function() {
	
	});
	it('should buffer any message sent from one client and there is no other client', function() {
	
	});
	it('should send all the buffered messages as soon as new client makes the connection with existing client', function() {
	
	});
	it('should send the message directly from one client to another if the connection exists', function() {
	
	});
	it('should wait for one more client if one among the two clients closes the connection', function() {
	
	});
	it('should wait for pair of tcp client if all the client connections are closed', function() {
	
	});
	it('should display error if any error occurs during the connection', function() {
	
	});
});
