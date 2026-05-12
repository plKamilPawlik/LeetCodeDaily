function maximumJumps(nums: number[], target: number): number {
	const n = nums.length;
	const dp = Array<number>(n).fill(-Infinity);
	dp[0] = 0;

	for (let i = 1; i < n; i++) {
		for (let j = 0; j < i; j++) {
			if (Math.abs(nums[j] - nums[i]) <= target) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
	}

	return dp[n - 1] >= 0 ? dp[n - 1] : -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 3, 6, 4, 1, 2], target = 2;

	const $result = maximumJumps(nums, target);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 3, 6, 4, 1, 2], target = 3;

	const $result = maximumJumps(nums, target);
	const $expect = 5;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [1, 3, 6, 4, 1, 2], target = 0;

	const $result = maximumJumps(nums, target);
	const $expect = -1;

	assertEquals($result, $expect);
});
