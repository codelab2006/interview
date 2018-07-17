function selectionSort(items) {
  for (let i = 0; i < items.length - 1; i++) {
    let targetIndex = i;
    for (let j = i + 1; j < items.length; j++) {
      if (items[targetIndex] > items[j]) targetIndex = j;
    }
    if (targetIndex != i) [items[i], items[targetIndex]] = [items[targetIndex], items[i]];
  }
  return items;
}

(() => {
  let array = [2,1,6,3,7,4,9,8,5,0,2,1,6,3,7,4,9,8,5,0];
  console.log(`Before: ${array}`);
  console.log(` After: ${selectionSort(array)}`);
})();
