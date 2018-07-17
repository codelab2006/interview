function insertionSort(items) {
  for (let i = 1; i < items.length; i++) {
    let current = items[i];
    while (i > 0 && items[i - 1] > current) {
      items[i] = items[i - 1];
      i--;
    }
    items[i] = current;
  }
  return items;
}

(() => {
  let array = [2,1,6,3,7,4,9,8,5,0,2,1,6,3,7,4,9,8,5,0];
  console.log(`Before: ${array}`);
  console.log(` After: ${insertionSort(array)}`);
})();
