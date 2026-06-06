function leftRightDifference(nums: number[]): number[] {
	const leftSum = new Array<number>(nums.length);
	const rightSum = new Array<number>(nums.length);

	let sum_l = 0;
	let sum_r = 0;

	for (let i = 0; i < nums.length; i++) {
		const j = nums.length - i - 1;

		leftSum[i] = sum_l;
		rightSum[j] = sum_r;

		sum_l += nums[i];
		sum_r += nums[j];
	}

	return nums.map((_, i) => Math.abs(leftSum[i] - rightSum[i]));
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [10, 4, 8, 3];

	const $result = leftRightDifference(nums);
	const $expect = [15, 1, 11, 22];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1];

	const $result = leftRightDifference(nums);
	const $expect = [0];

	assertEquals($result, $expect);
});
