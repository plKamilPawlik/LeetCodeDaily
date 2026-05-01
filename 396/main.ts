function maxRotateFunction(nums: number[]): number {
	let f = 0, sum = nums.reduce((a, b) => a + b);

	for (let i = 0; i < nums.length; i++) {
		f += i * nums[i];
	}

	let res = f;

	for (let i = nums.length - 1; i > 0; i--) {
		f += sum - nums.length * nums[i];
		res = Math.max(res, f);
	}

	return res;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [4, 3, 2, 6];

	const $result = maxRotateFunction(nums);
	const $expect = 26;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [100];

	const $result = maxRotateFunction(nums);
	const $expect = 0;

	assertEquals($result, $expect);
});
