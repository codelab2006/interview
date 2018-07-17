function bubbleSort(items) {
	for (let i = 0; i < items.length - 1; i++) {
		for (let j = 0; j < items.length - i - 1; j++) {
			if (items[j] > items[j + 1]) {
				[items[j], items[j + 1]] = [items[j + 1], items[j]];
			}
		}
	}
	return items;
}

(() => {
	let array = [2,1,6,3,7,4,9,8,5,0,2,1,6,3,7,4,9,8,5,0];
	console.log(`Before: ${array}`);
	console.log(` After: ${bubbleSort(array)}`);
})();
