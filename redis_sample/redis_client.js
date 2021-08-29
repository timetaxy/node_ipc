const { createClient } = require('redis');
const client = createClient(6370);
client.on('error', () => { console.log('redis error'); });
client.on('ready', () => { console.log('redis ready'); });
client.on('connect', () => { console.log('redis connected'); });
(async () => {
    // client.on('error', (err) => { console.log(`redis client err: ${err}`); });
    // await client.connect();
    // await client.set('k', 'v');
    // console.log(await client.get('k'));

    // sub.subscribe('noti2', (msg) => {
    //     console.log(`this sub2, msg:${msg}`);
    // });

    // duplicate for read only
    const sub = client.duplicate();
    // await sub.connect();
    // sub.subscribe('noti1', (msg) => {
    //     console.log(`this sub2, msg:${msg}`);
    // });
    // sub.publish('noti', 'test in client');//err, read only

    await client.connect();
    // client.subscribe('noti1', (msg) => {
    //     console.log(`this sub2, msg:${msg}`);
    // });
    client.publish('noti', 'test in client');

    // publish
    // client.publish('noti', 'test');

    // disconn
    // await sub.unsubscribe('noti');
    // await sub.pUnsubscribe('noti');
})();