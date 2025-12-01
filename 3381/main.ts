function maxSubarraySum(nums: number[], k: number): number {
	const kSum = new Array<number>(k).fill(Infinity);
	kSum[k - 1] = 0;

	let maxSum = -Infinity;
	let prefixSum = 0;

	for (let i = 0; i < nums.length; i++) {
		prefixSum += nums[i];
		maxSum = Math.max(maxSum, prefixSum - kSum[i % k]);
		kSum[i % k] = Math.min(kSum[i % k], prefixSum);
	}

	return maxSum;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const nums = [1, 2];
	const k = 1;

	const $result = maxSubarraySum(nums, k);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const nums = [-1, -2, -3, -4, -5];
	const k = 4;

	const $result = maxSubarraySum(nums, k);
	const $expect = -10;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const nums = [-5, 1, 2, -3, 4];
	const k = 2;

	const $result = maxSubarraySum(nums, k);
	const $expect = 4;

	assertEquals($result, $expect);
});
