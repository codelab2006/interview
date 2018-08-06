const obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(target, key, receiver);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(target, key, value, receiver);
    return Reflect.set(target, key, value, receiver);
  }
});

obj.p1 = 123;
