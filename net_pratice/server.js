const net = require('net');
const PORT = 8124;
const HOST = '::1';
let dataQ = [];
let socket;
const server = net.createServer(s => {
    socket = s;
    s.setEncoding('utf-8');
    s.on('connect', x => { console.log(`server, conn recv : ${x}`); });
    console.log(`socket._server._connections : ${s._server._connections}`);
    s.on('data', d => {
        console.log(`this server, receive from client data:${d}`);
        //include self, broad cast
    });
    s.on('error', e => {
        console.log(`err occurr e:${e}`);
        return s.end();
    });
}).listen(PORT, HOST, () => {
    console.log('server bound');
});
server.on('error', (err) => {
    // throw err;
});

let i = 0;
setInterval(() => { console.log(`now data emitting`); dataQ.push({ num: i++, data: 'new data' }); console.log(`emitting rest data : ${JSON.stringify(dataQ)}`); }, 1000);

setInterval(() => {
    console.log(`server._connections:${server._connections}`);
    if (server._connections) {
        socket.write(JSON.stringify(dataQ.shift()));
        console.log(`rest of this queue : ${JSON.stringify(dataQ)}`);
    }
    // }
}, 1000);

