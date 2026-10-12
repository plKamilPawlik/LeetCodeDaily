function sumOfSquares(nums: number[]): number {
	let sumOfSquares = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums.length % (i + 1) === 0) {
			sumOfSquares += nums[i] ** 2;
		}
	}

	return sumOfSquares;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 2, 3, 4];

	const $result = sumOfSquares(nums);
	const $expect = 21;

	assertEquals($result, $expect);
});

Deno.test("Case 1", () => {
	const nums = [2, 7, 1, 19, 18, 3];

	const $result = sumOfSquares(nums);
	const $expect = 63;

	assertEquals($result, $expect);
});
