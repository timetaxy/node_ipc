`use strict`;
// const dataEmitter = require('./sv1');
// const EventEmitter = require("events");

// class DataEmitter extends EventEmitter { }
// const dataEmitter = new DataEmitter();

const mockCode = `sv1`;
// const mockMsg2 = `sv1 polling... `;
// const events = () => {
//     setInterval((
//     ) => { console.log(`event emitting : ${mockCode}`); dataEmitter.emit(mockCode, mockMsg2); }, 1000);
// };

// dataEmitter.on(mockCode, (x) => { console.log(`data coming : ${x}`); });
// dataEmitter.on(mockCode, function (x) {
// console.log(`data coming : ${x}`);
// console.log(`sv2 val:${dataEmitter.val}`);
// });
// process.on(mockCode, (x) => { console.log(`data coming : ${x}`); });
// events();
// module.exports = dataEmitter;

if (process.send) {
    process.send(`from sv2`);
}
process.on(mockCode, x => {
    console.log(`msg arrived from sv1:${x}`);
});
process.on('');