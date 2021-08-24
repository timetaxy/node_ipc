npm install -g loadtest
loadtest -n 1000 -c 100 --rps 200 <host>:<port>?number=<param_fib>
https://artillery.io/faq.html
npm install -g pm2
pm2 [start|restart|stop|delete] <config_name>.config.js/json
pm2 start ecosystem.config.js
//ref : https://medium.com/beyond-coding/take-advantage-of-node-js-cluster-and-child-processes-with-pm2-rabbitmq-redis-and-nginx-c83eccfb8af8

 pm2 start app.js -i 0
 -i <number of workers> will tell PM2 to launch the app in cluster_mode (as opposed to fork_mode). If <number of workers> is set to 0, PM2 will automatically spawn as many workers as there are CPU cores.
 //ref:https://blog.appsignal.com/2021/02/03/improving-node-application-performance-with-clustering.html

