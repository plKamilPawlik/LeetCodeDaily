function minRemoval(nums: number[], k: number): number {
	nums.sort((a, b) => a - b);

	let p = 0, q = 0;
	let maxLength = 0;

	while (true) {
		while (q < nums.length && nums[q] <= nums[p] * k) q++;

		maxLength = Math.max(maxLength, q - p);

		if (q >= nums.length) break;

		while (p < nums.length && nums[q] > nums[p] * k) p++;

		if (p >= nums.length) break;
	}

	return nums.length - maxLength;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [2, 1, 5], k = 2;

	const $result = minRemoval(nums, k);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 6, 2, 9], k = 3;

	const $result = minRemoval(nums, k);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [4, 6], k = 2;

	const $result = minRemoval(nums, k);
	const $expect = 0;

	assertEquals($result, $expect);
});
