function fun() {
  console.log(this.name);
}

// fun();

const o = {
  name: 'o-name'
};

// fun.call(o);

// fun.bind(o)();

function bind(func, thisArg) {
  return () => {
    func.call(thisArg);
  };
}

let fun2 = bind(fun, o);
fun2();
