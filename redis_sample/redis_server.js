const { createClient } = require('redis');
const client = createClient(6370);
client.on('error', () => { console.log('redis error'); });
client.on('ready', () => { console.log('redis ready'); });
client.on('connect', () => { console.log('redis connected'); });
(async () => {
    // client.on('error', (err) => { console.log(`redis client err: ${err}`); });
    await client.connect();
    // await client.set('k', 'v');
    // console.log(await client.get('k'));
    // const sub = client.duplicate();
    // await sub.connect();
    // sub.subscribe('noti2', (msg) => {
    //     console.log(`this sub2, msg:${msg}`);
    // });

    // publish
    setInterval(() => {
        client.publish('noti1', 'test');
        console.log(`now publishiing...`);
    }, 1000);

    // disconn
    // await sub.unsubscribe('noti');
    // await sub.pUnsubscribe('noti');
})();