function shellSort(items) {
  let length = items.length;
  let gap = Math.floor(length / 2);
  while (gap > 0) {
    for (let i = gap; i < length; i++) {
      let temp = items[i];
      let j = i;
      while (j >= gap && items[j - gap] > temp) {
        items[j] = items[j - gap];
        j -= gap;
      }
      items[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return items;
}

(() => {
  let array = [2,1,6,3,7,4,9,8,5,0,2,1,6,3,7,4,9,8,5,0];
  console.log(`Before: ${array}`);
  console.log(` After: ${shellSort(array)}`);
})();
