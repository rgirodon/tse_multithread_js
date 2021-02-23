'use strict';

/**
* Use a asynchronous function to make intensive CPU task
*/
function intensiveCpuTaskIo () {
    console.log('Launching intensive CPU task');

    let increment = 0;

    while (increment !== Math.pow(10, 10)) {
        increment++;
    }

    console.log('Intensive CPU task is done ! Result is : ', increment);
}

async function realAsyncFunction(param) {

  let result = await realAsyncFunctionHelper(param);

  return result;
}

async function realAsyncFunctionHelper(param) {

  return new Promise(
    (resolve) => {
      setTimeout(
                () => {
                  resolve(param + 10);
                },
                5000);
  });
}

/**
* Use main thread while making intensive CPU task on worker
*/
async function main () {

  // this log will not happen until the intensive task is done, main thread is blocked
  setInterval(
      () => { 
        console.log('Event loop on main thread is not blocked') 
    }, 
    1000);

  let result = await realAsyncFunction(12);

  console.log(result + ' is the result !');

  intensiveCpuTaskIo();
}

main();