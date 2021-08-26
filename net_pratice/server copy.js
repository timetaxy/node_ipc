const net = require('net');
const server = net.createServer(socket => {
    socket.on('data', d => {
        console.log(`this server, receive from client data:${d}`);
        //   const runSession = await this._startSession(JSON.parse(d), frontend);
        // let i = 0;
        // setInterval(() => { socket.write(`here is server ${i++}\r\n`); console.log(`data emitting`); }, 1000);
        socket.write('run');
        // socket.pipe(socket, false);
        // runSession();
    });
    socket.on('error', e => caughtErrorDebug(e));
});
// .listen(this._pipe);
// server.unref();  
// const server = net.createServer((c) => {
//     // 'connection' listener.
//     console.log('client connected');
//     c.on('end', () => {
//         console.log('client disconnected');
//     });
//     c.on('data',()=>{

//     })
//     // c.write('hello\r\n');
//     // c.pipe(c);
// });

// let i = 0;
// setInterval(() => { c.write(`here is server ${i++}\r\n`); }, 1000);
// setInterval(() => { server.emit(`here is server ${i++}\r\n`); console.log(`data emitting`); }, 1000);

// if (server) server.once('data', () => { console.log(`data send`); });

server.on('error', (err) => {
    // throw err;
    // server.removeAllListeners();
});
server.listen(8124, () => {
    console.log('server bound');
});