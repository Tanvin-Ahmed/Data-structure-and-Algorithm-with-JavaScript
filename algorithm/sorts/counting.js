//! *******Counting sort is not applicable in negative integer and any floating number********

const countingSort = numbs => {
	const n = numbs.length;
	const maxElement = Math.max(...numbs);
	let count = new Array(maxElement + 1);
	let sortedArray = [];

	//* initial value of count array is 0
	for (let i = 0; i < count.length; i++) {
		count[i] = 0;
	}

	//* find out how many times same element is present in given array
	for (let j = 0; j < numbs.length; j++) {
		++count[numbs[j]];
	}

	//* update count array by replace the values with the elements actual position in sorted Array
	for (let l = 1; l <= maxElement; l++) {
		count[l] += count[l - 1];
	}

	//* make sorted array
	for (let m = n - 1; m >= 0; m--) {
		sortedArray[--count[numbs[m]]] = numbs[m];
	}

	//* now copy sorted array in input array
	for (let o = 0; o < sortedArray.length; o++) {
		numbs[o] = sortedArray[o];
	}

	return numbs;
};

console.log(countingSort([2, 5, 4, 9, 0, 2]));

//TODO: time complexity of counting sort is O(n + maxElement), where "n" is the length of input array
