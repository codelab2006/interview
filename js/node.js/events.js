const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter1 = new MyEmitter();

myEmitter1.on('event', function (a, b) {
  console.log(a,b,this);
});

myEmitter1.on('event', (a, b) => {
  console.log(a,b,this);
});

myEmitter1.emit('event', 'aa', 'bb');

const myEmitter2 = new MyEmitter();

myEmitter2.once('event', (a, b) => {
  console.log(a,b);
});

myEmitter2.emit('event', 'aaa', 'bbb')
myEmitter2.emit('event', 'aaa', 'bbb')

const myEmitter4 = new MyEmitter();
myEmitter4.on('error', () => {
  console.log('handle error');
});
myEmitter4.emit('error');

// const myEmitter3 = new MyEmitter();
// myEmitter3.emit('error');

const myEmitter5 = new MyEmitter();

myEmitter5.once('newListener', (event, listener) => {
  if (event === 'event') {
    myEmitter5.on('event', () => {
      console.log('b');
    })
  }
});

myEmitter5.on('event', () => {
  console.log('a');
});

myEmitter5.emit('event');
