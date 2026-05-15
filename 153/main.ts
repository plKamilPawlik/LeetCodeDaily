function findMin(nums: number[]): number {
	if (nums[0] < nums[nums.length - 1]) return nums[0];

	let p = 0;
	let q = nums.length - 1;

	while (q - p > 1) {
		const mid = (p + q) >> 1;

		if (nums[p] < nums[mid]) p = mid;
		if (nums[q] > nums[mid]) q = mid;
	}

	return nums[q];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [3, 4, 5, 1, 2];

	const $result = findMin(nums);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [4, 5, 6, 7, 0, 1, 2];

	const $result = findMin(nums);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [11, 13, 15, 17];

	const $result = findMin(nums);
	const $expect = 11;

	assertEquals($result, $expect);
});
