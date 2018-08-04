const fs = require('fs');

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('./file.md', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);


// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});

/*
When the event loop enters the poll phase, it has an empty queue (fs.readFile() has not completed),
so it will wait for the number of ms remaining until the soonest timer's threshold is reached.
While it is waiting 95 ms pass, fs.readFile() finishes reading the file and its callback which takes 10 ms to complete is added to the poll queue and executed.
When the callback finishes, there are no more callbacks in the queue, so the event loop will see that the threshold of the soonest timer has been reached
then wrap back to the timers phase to execute the timer's callback. In this example, you will see that the total delay between the timer being scheduled
and its callback being executed will be 105ms.

Note: To prevent the poll phase from starving the event loop, libuv
(the C library that implements the Node.js event loop and all of the asynchronous behaviors of the platform)
also has a hard maximum (system dependent) before it stops polling for more events.
*/
