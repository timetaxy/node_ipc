`use strict`;
const EventEmitter = require("events");
const fork = require('child_process').fork;
const prg = path.resolve('sv2.js');
const param = [];
const options = { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] };
const child = fork(program, parameters, options);

// fork(prf, param, options))}



// class DataEmitter extends EventEmitter { }
// const dataEmitter = new DataEmitter();

let val = 1;
const mockCode = `sv1`;
const mockMsg2 = `sv1 polling... `;
const events = () => {
    setInterval((
    ) => {
        console.log(`event emitting : ${mockCode}`);
        child.on(mockCode, x => {
            console.log(`fromr child: ${x}`);
            child.send(`from sv1 msg`);
        });
        // if (process.send) {
        // process.send(mockCode);
        // }
        // process.once(mockCode, mockMsg2);
        // process.emit(mockCode, mockMsg2);
        // val += 1;
        // dataEmitter.emit(mockCode, mockMsg2); val += 1;
        console.log(`sv1 val:${val}`);
    }, 1000);

};

// dataEmitter.on(mockCode, (x) => { console.log(`data coming : ${x}`); });
// dataEmitter.on(mockCode, function (x) {
//     console.log(`data coming : ${x}`);
// });
events();
module.exports = dataEmitter;