const { Worker } = require('worker_threads');

// Create the worker.
const worker = new Worker('./splittedSingleFileWorker_worker.js', { workerData: { info : 'Télécom St-Etienne splitted'}});

// Listen for messages from the worker and print them.
worker.on('message', (msg) => { console.log(msg); });