function* gen1() {
  yield 123 + 456;
}

function* gen2() {
  return 123 + 456;
}

console.log(gen1().next());
console.log(gen2().next());
