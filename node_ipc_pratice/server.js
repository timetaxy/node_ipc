// const t1 = require('node-ipc').default;
// const { RootIPC } = require('node-ipc');
// const ipc = RootIPC;
const ipc = require('node-ipc').default;
// import ipc from '../../../node-ipc.js';

/***************************************\
 *
 * You should start both hello and world
 * then you will see them communicating.
 *
 * *************************************/

ipc.config.id = 'world';
ipc.config.retry = 1500;

ipc.serve(
    function () {
        ipc.server.on(
            'app.message',
            function (data, socket) {
                ipc.server.emit(
                    socket,
                    'app.message',
                    {
                        id: ipc.config.id,
                        message: data.message + ' world!'
                    }
                );
            }
        );
    }
);



ipc.server.start();