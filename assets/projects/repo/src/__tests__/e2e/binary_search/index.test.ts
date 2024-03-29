import { binarySearch } from "@/binary_search/binary_search";
//#if SITUATION == BINARY_SEARCH
import { findIndex } from "@/binary_search/find_index";

describe("binarySearch", () => {
	test("find index", () => {
		const array = Array(1000000)
			.fill(0)
			.map((_, i) => i + 1);
		expect(binarySearch(array, 1000000)).toBe(1000000 - 1);
		expect(binarySearch(array, 5000)).toBe(5000 - 1);
	});
	test("not found", () => {
		const array = Array(1000000)
			.fill(0)
			.map((_, i) => i + 1);
		expect(binarySearch(array, 10000000)).toBe(-1);
	});
	test("find index benchmark", () => {
		const array = Array(1000000)
			.fill(0)
			.map((_, i) => i + 1);
		const binarySearchStart = performance.now();
		binarySearch(array, 1000000);
		const binarySearchEnd = performance.now();
		const findIndexStart = performance.now();
		findIndex(array, 1000000);
		const findIndexEnd = performance.now();
		expect(binarySearchEnd - binarySearchStart).toBeLessThan(
			findIndexEnd - findIndexStart,
		);
	});
});
//#endif
