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
