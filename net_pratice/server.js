const net = require('net');
const PORT = 8124;
const HOST = '127.0.0.1';
// let clientConn = false;
// let clientReady = false;
let dataQ = [];
let socket;
const server = net.createServer(s => {
    // tempSocket = socket;
    socket = s;
    s.setEncoding('utf-8');
    s.on('connect', x => { console.log(`server, conn recv : ${x}`); });
    console.log(`socket._server._connections : ${s._server._connections}`);
    // if (socket._server._connections) clientConn = true;
    s.on('data', d => {
        console.log(`this server, receive from client data:${d}`);
        //include self, broad cast
        // if (d.trim().toLowerCase() === 'ready') clientReady = true;
    });
    // while (true) {
    //     console.log(`before send queue : ${JSON.stringify(dataQ)}`);
    //     if (clientConn && dataQ.length > 0) {
    //         // if (clientConn && clientReady && dataQ.length > 0) {
    //         socket.write(JSON.stringify(dataQ.shift()));
    //         console.log(`rest of this queue : ${JSON.stringify(dataQ)}`);
    //     }
    // }
    s.on('error', e => {
        console.log(`err occurr e:${e}`);
        // clientConn = false, 
        // clientReady = false; 
        return s.end();
    });
}).listen(PORT, '::1', () => {
    // }).listen(PORT, HOST, () => {
    console.log('server bound');
});
server.on('error', (err) => {
    // throw err;
    // server.removeAllListeners();
});

// (() => {
let i = 0;
setInterval(() => { console.log(`now data emitting`); dataQ.push({ num: i++, data: 'new data' }); console.log(`emitting rest data : ${JSON.stringify(dataQ)}`); }, 1000);
// })();

setInterval(() => {
    console.log(`server._connections:${server._connections}`);
    // if (server.connections && dataQ.length > 0) {
    // if (clientConn && clientReady && dataQ.length > 0) {
    if (server._connections) {
        // console.log(`tempSocket._server.connections:${tempSocket._server._connections}`);
        socket.write(JSON.stringify(dataQ.shift()));
        console.log(`rest of this queue : ${JSON.stringify(dataQ)}`);
    }
    // }
}, 1000);
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

