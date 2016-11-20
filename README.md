# tcp-relayer
Node.js module to relay raw TCP data from one socket to another. Essentially, it should work like the following:

- A server is started  on some port
- It waits for two TCP clients to connect
- As soon as it receives two connections, it starts relaying data from the first socket to second one
- Data is relayed until one of the clients disconnects

## Pre-requisites

- NodeJS version >= 6.9.1
- NPM version >= 3.10.8
- Telnet or any other tool that allows you to connect to remote computer over  a TCP/IP network

## Installation

```sh
$ npm install https://github.com/sarsjits/tcp-relayer.git
```

## Usage

```javascript
var relay = require('tcp-relayer');

relay.relayServer(portNumber);
```

## Example

- Use the above module in your Node app as mentioned in the usage. This will create a server listening over the mentioned port.

- Run the app 
- ![Image 01][i01]
- Now to connect to the running server, we will use telnet. 
- Client 1
- ![Image 02][i02]
- Server
- ![Image 03][i03]
- Sending message to the server even no other TCP client is yet connected.
- Client 1
- ![Image 04][i04]
- Server
- ![Image 05][i05]
- As soon as another client connects to the server, buffered messages are sent to the client. The two clients can now communicate via server.
- Client 2
- ![Image 06][i06]
- Server
- ![Image 07][i07]
- If the connection between two TCP clients is already established. The server will drop the new incoming connection.
- Client 3
- ![Image 08][i08]
- Server
- ![Image 09][i09]

[i01]: ./images/i01.png
[i02]: ./images/i02.png
[i03]: ./images/i03.png
[i04]: ./images/i04.png
[i05]: ./images/i05.png
[i06]: ./images/i06.png
[i07]: ./images/i07.png
[i08]: ./images/i08.png
[i09]: ./images/i09.png
