const EventEmitter = require("events");

`use strict`;
class DataEmitter extends EventEmitter { }
const dataEmitter = new DataEmitter();

const mockCode = `sv1`;
const mockMsg2 = `sv1 polling... `;
const events = () => {
    setInterval((
    ) => { console.log(`event emitting : ${mockCode}`); dataEmitter.emit(mockCode, mockMsg2); }, 1000);

};

// dataEmitter.on(mockCode, (x) => { console.log(`data coming : ${x}`); });
dataEmitter.on(mockCode, function (x) {
    console.log(`data coming : ${x}`);
});
events();
module.exports = dataEmitter;