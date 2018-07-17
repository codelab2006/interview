function quickSort(items) {
  if (items.length <= 1) return items;
  let pivotIndex = Math.floor(items.length / 2);
  let pivot = items.splice(pivotIndex, 1)[0];
  let [left, right] = [[],[]];
  for (let i = 0; i < items.length; i++) {
    if (items[i] > pivot) right.push(items[i]);
    else left.push(items[i]);
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

(() => {
  let array = [2,1,6,3,7,4,9,8,5,0,2,1,6,3,7,4,9,8,5,0];
  console.log(`Before: ${array}`);
  console.log(` After: ${quickSort(array)}`);
})();
