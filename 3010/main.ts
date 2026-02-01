function minimumCost(nums: number[]): number {
	const baseCost = nums.shift()!;
	nums.sort((a, b) => a - b);

	return baseCost + nums[0] + nums[1];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 2, 3, 12];

	const $result = minimumCost(nums);
	const $expect = 6;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [5, 4, 3];

	const $result = minimumCost(nums);
	const $expect = 12;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [10, 3, 1, 1];

	const $result = minimumCost(nums);
	const $expect = 12;

	assertEquals($result, $expect);
});
