'use strict';

const { Worker } = require('worker_threads');

/**
* Use a worker via Worker Threads module to make intensive CPU task
* @param filepath string relative path to the file containing intensive CPU task code
* @return {Promise(mixed)} a promise that contains result from intensive CPU task
*/
function useWorker(filepath) {

    const worker = new Worker(filepath);

    worker.on('online', 
                () => { 
                    console.log('Launching intensive CPU task');
                });

    worker.on('message', 
                (messageFromWorker) => {                            
                    console.log(messageFromWorker);
                });
}

/**
* Use main thread while making intensive CPU task on worker
*/
function main () {
    // this log will happen every second during and after the intensive task, main thread is never blocked
    setInterval(() => { 
        console.log('Event loop on main thread is not blocked right now'); 
    }, 
    1000);

    useWorker('./firstWorker.js');
}

main();