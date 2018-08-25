let o = {};
Reflect.defineProperty(o, 'name', {
  value: 'abc'
});
console.log(o, o.name);
o.name = 'def';
console.log(o, o.name);

let nameDescriptor = Reflect.getOwnPropertyDescriptor(o, 'name');
console.log(nameDescriptor);

o.age = 10;
console.log(o, o.age);
o.age = '100';
console.log(o, o.age);

let ageDescriptor = Reflect.getOwnPropertyDescriptor(o, 'age');
console.log(ageDescriptor);

