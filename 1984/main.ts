function minimumDifference(nums: number[], k: number): number {
	nums.sort((a, b) => a - b);

	let diff = nums.at(-1)!;

	for (let i = 0; i <= nums.length - k; i++) {
		diff = Math.min(diff, nums[i + k - 1] - nums[i]);
	}

	return diff;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [90];
	const k = 1;

	const $result = minimumDifference(nums, k);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [9, 4, 1, 7];
	const k = 2;

	const $result = minimumDifference(nums, k);
	const $expect = 2;

	assertEquals($result, $expect);
});
