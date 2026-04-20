function findLastIndex(arr: number[], index: number, value: number): number {
	if (arr.length <= index) return -1;
	if (arr[index] < value) return -1;

	let p = index, q = arr.length;

	while (p <= q) {
		const mid = p + ((q - p) >> 1);

		if (arr[mid] >= value) {
			p = mid + 1;
		} else {
			q = mid - 1;
		}
	}

	return q;
}

function maxDistance(nums1: number[], nums2: number[]): number {
	let maxDistance = 0;

	for (let i = 0; i < nums1.length; i++) {
		const j = findLastIndex(nums2, i, nums1[i]);
		maxDistance = Math.max(maxDistance, j - i);
	}

	return maxDistance;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums1 = [55, 30, 5, 4, 2], nums2 = [100, 20, 10, 10, 5];

	const $result = maxDistance(nums1, nums2);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums1 = [2, 2, 2], nums2 = [10, 10, 1];

	const $result = maxDistance(nums1, nums2);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums1 = [30, 29, 19, 5], nums2 = [25, 25, 25, 25, 25];

	const $result = maxDistance(nums1, nums2);
	const $expect = 2;

	assertEquals($result, $expect);
});
