function maxDotProduct(nums1: number[], nums2: number[]): number {
	const dp = Array.from({ length: nums1.length }, () => new Array<number>(nums2.length));

	for (let i = nums1.length - 1; i >= 0; i--) {
		for (let j = nums2.length - 1; j >= 0; j--) {
			dp[i][j] = nums1[i] * nums2[j];

			if (i < nums1.length - 1 && j < nums2.length - 1) {
				dp[i][j] = Math.max(dp[i][j], dp[i][j] + dp[i + 1][j + 1]);
			}

			if (i < nums1.length - 1) {
				dp[i][j] = Math.max(dp[i][j], dp[i + 1][j]);
			}

			if (j < nums2.length - 1) {
				dp[i][j] = Math.max(dp[i][j], dp[i][j + 1]);
			}
		}
	}

	return dp[0][0];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums1 = [2, 1, -2, 5], nums2 = [3, 0, -6];

	const $result = maxDotProduct(nums1, nums2);
	const $expect = 18;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums1 = [3, -2], nums2 = [2, -6, 7];

	const $result = maxDotProduct(nums1, nums2);
	const $expect = 21;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums1 = [-1, -1], nums2 = [1, 1];

	const $result = maxDotProduct(nums1, nums2);
	const $expect = -1;

	assertEquals($result, $expect);
});
