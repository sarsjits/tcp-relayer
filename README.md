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
- Client
- ![Image 02][i02]
- Server
- ![Image 03][i03]

[i01]: ./images/i01.png
[i02]: ./images/i02.png
[i03]: ./images/i03.png
