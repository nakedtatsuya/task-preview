//#if SITUATION == BINARY_SEARCH
export const binarySearch = (array: number[], target: number): number => {
	//#if ANSWER == 1
	let left = 0;
	let right = array.length - 1;
	let mid = Math.floor((left + right) / 2);

	while (left <= right) {
		if (array[mid] === target) {
			return mid;
		} else if (array[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
		mid = Math.floor((left + right) / 2);
	}
	return -1;
	//#endif
};
//#endif
