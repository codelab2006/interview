function selectionSort(items) {
  for (let i = 0; i < items.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < items.length; j++) {
      if (items[minIndex] > items[j]) minIndex = j;
    }
    if (minIndex != i) [items[i], items[minIndex]] = [items[minIndex], items[i]];
  }
  return items;
}

(() => {
  let array = [2,1,6,3,7,4,9,8,5,0,2,1,6,3,7,4,9,8,5,0];
  console.log(`Before: ${array}`);
  console.log(` After: ${selectionSort(array)}`);
})();
