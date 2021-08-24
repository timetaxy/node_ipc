const net = require('net');
let dataQ = [];


let connInterval;
connInterval = setInterval(() => {
    console.log(`trying connect...`);
    const client = net.createConnection({ port: 8124 }, () => {
        // 'connect' listener.
        console.log(`client conn bool:${client.connecting}`);
        console.log('connected to server!');
        clearInterval(connInterval);
        // client.write('this is client!! \r\n');
        // client.pipe();
    });
    client.write('ready');
    client.pipe(client, false);

    client.on('data', (data) => {
        console.log(`this is client, receive from server ${data.toString()}`);
        dataQ.push(data);
        console.log(`data saved dataQ: ${dataQ}`);
        console.log(`data len dataQ: ${dataQ.length}`);
        // console.log(data.toString());

        // client.end();

    });
    client.on('end', () => {
        console.log('disconnected from server');
    });
    client.on("error", e => {
        // reject(`Endpoint is unreachable: ${server}:${port}. ${e && e.message}`)
        console.log(e);
    });
}, 1000);


const gracefulShutdownHandler = function gracefulShutdownHandler(signal) {
    client.end();
    // client.removeAllListeners();
    // console.log(`⚠️ Caught ${ signal }, gracefully shutting down`);
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

// // The SIGINT signal is sent to a process by its controlling terminal when a user wishes to interrupt the process.
// process.on('SIGINT', gracefulShutdownHandler);

// // The SIGTERM signal is sent to a process to request its termination.
// process.on('SIGTERM', gracefulShutdownHandler);;;