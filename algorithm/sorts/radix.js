//! **** radix sort not applicable for negative and floating numbers ****

const countingSort = (numbs, position) => {
	const n = numbs.length;
	let count = new Array(10);
	let sortedArray = [];

	//* initial value of count array is 0
	for (let i = 0; i < count.length; i++) {
		count[i] = 0;
	}

	//* find out how many times same element is present in given array
	for (let j = 0; j < numbs.length; j++) {
		++count[Math.floor((numbs[j] / position) % 10)];
	}

	//* update count array by reposition the values with the elements actual position in sorted Array
	for (let l = 1; l <= 10; l++) {
		count[l] += count[l - 1];
	}

	//* make sorted array
	for (let m = n - 1; m >= 0; m--) {
		sortedArray[--count[Math.floor((numbs[m] / position) % 10)]] = numbs[m];
	}

	//* now copy sorted array in input array
	for (let o = 0; o < sortedArray.length; o++) {
		numbs[o] = sortedArray[o];
	}

	return numbs;
};

const radixSort = numbs => {
	const maxElement = Math.max(...numbs);

	for (
		let position = 1;
		Math.floor(maxElement / position) > 0;
		position *= 10
	) {
		numbs = countingSort(numbs, position, maxElement);
	}

	return numbs;
};

console.log(radixSort([23, 23, 25, 65, 34]));

//TODO: time complexity of radix sort is O(p * (n + k)), where k = how many time count array iterate, n = input array length, p = pass or how many time radix sort for loop iterate
