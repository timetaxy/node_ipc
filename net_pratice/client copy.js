const net = require('net');
const client = net.createConnection({ port: 8124 }, () => {
    // 'connect' listener.
    console.log('connected to server!');
    client.write('this is client\r\n');
});
client.on('data', (data) => {
    // console.log(data.toString());
    console.log(`this is client, receive from server ${data.toString()}`);
    // client.end();
});
client.on('end', () => {
    console.log('disconnected from server');
});

const gracefulShutdownHandler = function gracefulShutdownHandler(signal) {
    client.end();
    // client.removeAllListeners();
    // console.log(`⚠️ Caught ${signal}, gracefully shutting down`);
    // ONLINE = false;

    // setTimeout(() => {
    //   console.log('🤞 Shutting down application');
    //   // stop the server from accepting new connections
    //   server.close(function () {
    //     console.log('👋 All requests stopped, shutting down');
    //     // once the server is not accepting connections, exit
    process.exit();
    //   });
    // }, 0);
};

// The SIGINT signal is sent to a process by its controlling terminal when a user wishes to interrupt the process.
process.on('SIGINT', gracefulShutdownHandler);

// The SIGTERM signal is sent to a process to request its termination.
process.on('SIGTERM', gracefulShutdownHandler);