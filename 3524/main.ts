function resultArray(nums: number[], k: number): number[] {
	const result = new Array(k).fill(0);

	let dp = new Array(k).fill(0);

	for (let i = 0; i < nums.length; i++) {
		const ndp = new Array(k).fill(0);
		ndp[nums[i] % k]++;

		for (let r = 0; r < k; r++) {
			ndp[(r * nums[i]) % k] += dp[r];
		}

		dp = ndp;

		for (let r = 0; r < k; r++) {
			result[r] += dp[r];
		}
	}

	return result;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 2, 3, 4, 5], k = 3;

	const $result = resultArray(nums, k);
	const $expect = [9, 2, 4];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 2, 4, 8, 16, 32], k = 4;

	const $result = resultArray(nums, k);
	const $expect = [18, 1, 2, 0];

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [1, 1, 2, 1, 1], k = 2;

	const $result = resultArray(nums, k);
	const $expect = [9, 6];

	assertEquals($result, $expect);
});
