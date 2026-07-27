function maxProduct(nums: number[]): number {
	nums.sort((a, b) => b - a);
	return (nums[0] - 1) * (nums[1] - 1);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [3, 4, 5, 2];

	const $result = maxProduct(nums);
	const $expect = 12;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 5, 4, 5];

	const $result = maxProduct(nums);
	const $expect = 16;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [3, 7];

	const $result = maxProduct(nums);
	const $expect = 12;

	assertEquals($result, $expect);
});
