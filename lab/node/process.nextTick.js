const fs = require('fs');
fs.readFile('./file.md', () => {
  console.log('fs callback');
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
  setImmediate(() => {
    console.log('setImmediate');
    process.nextTick(()=>{
      console.log('nextTick3');
    })
  });
  process.nextTick(()=>{
    console.log('nextTick1');
  })
  process.nextTick(()=>{
    console.log('nextTick2');
  })
});


fs.readFile('./file.md', () => {
  console.log('fs callback');
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
  setImmediate(() => {
    console.log('setImmediate');
    process.nextTick(()=>{
      console.log('nextTick3');
    })
  });
  process.nextTick(()=>{
    console.log('nextTick1');
  })
  process.nextTick(()=>{
    console.log('nextTick2');
  })
});

/*
fs callback
nextTick1
nextTick2
fs callback
nextTick1
nextTick2
setImmediate
setImmediate
nextTick3
nextTick3
setTimeout
setTimeout

fs callback
nextTick1
nextTick2
setImmediate
nextTick3
setTimeout
fs callback
nextTick1
nextTick2
setImmediate
nextTick3
setTimeout
*/
