function maxTotalValue(nums: number[], k: number): number {
	let max = nums[0];
	let min = nums[0];

	for (let i = 1; i < nums.length; i++) {
		max = Math.max(max, nums[i]);
		min = Math.min(min, nums[i]);
	}

	return k * (max - min);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 3, 2], k = 2;

	const $result = maxTotalValue(nums, k);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [4, 2, 5, 1], k = 3;

	const $result = maxTotalValue(nums, k);
	const $expect = 12;

	assertEquals($result, $expect);
});
