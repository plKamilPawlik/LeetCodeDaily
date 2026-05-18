function findMin(nums: number[]): number {
	let p = 0, q = nums.length - 1;

	for (; p < nums.length - 1; p++) {
		if (nums[p] !== nums[q]) break;
	}

	while (p < q) {
		const mid = (p + q) >> 1;

		if (nums[mid] > nums[nums.length - 1]) {
			p = mid + 1;
		} else {
			q = mid;
		}
	}

	return nums[p];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 3, 5];

	const $result = findMin(nums);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [2, 2, 2, 0, 1];

	const $result = findMin(nums);
	const $expect = 0;

	assertEquals($result, $expect);
});
