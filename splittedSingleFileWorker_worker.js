const { parentPort, workerData } = require('worker_threads');

// Send a message to the main thread.
parentPort.postMessage('Hello ' + workerData.info + ' !');