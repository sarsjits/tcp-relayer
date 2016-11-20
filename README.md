# tcp-relayer
Node.js module to relay raw TCP data from one socket to another. Essentially, it should work like the following:

- A server is started  on some port
- It waits for two TCP clients to connect
- As soon as it receives two connections, it starts relaying data from the first socket to second one
- Data is relayed until one of the clients disconnects
