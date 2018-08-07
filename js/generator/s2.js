let arr = [1, [[2, 3], 4], [5, 6]];

let flat = function* (a) {
  let length = a.length;
  for (let i = 0; i < length; i++) {
    let item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (let f of flat(arr)) {
  console.log(f);
}
