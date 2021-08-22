const spawn = require('child_process').spawn;

const command = 'node';
const parameters = [path.resolve('program.js')];

const child = spawn(command, parameters, {
    stdio: ['pipe', 'pipe', 'pipe', 'ipc']
});