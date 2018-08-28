//只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
function * fibs() {
    let p = 0;
    let c = 1;
    while (true) {
        yield p + c;
        [p, c] = [c, p + c];
    }
}

let [a,b,c,d,e,f,g,h,i,j,k] = fibs();

console.log(a,b,c,d,e,f,g,h,i,j,k);

//解构赋值允许指定默认值。
let [foo = 123] = [];
console.log(foo);

let fun1 = ({a = 1, b = 2} = {}) => {
    console.log(a + b);
}
fun1()

let fun2 = ([x = 1] = []) => {
    console.log(x);
}
fun2()
