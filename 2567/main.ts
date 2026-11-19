function minimizeSum(nums: number[]): number {
	nums.sort((a, b) => a - b);

	return Math.min(
		nums[nums.length - 1] - nums[2],
		nums[nums.length - 2] - nums[1],
		nums[nums.length - 3] - nums[0],
	);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums: number[] = [1, 4, 7, 8, 5];

	const $result = minimizeSum(nums);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums: number[] = [1, 4, 3];

	const $result = minimizeSum(nums);
	const $expect = 0;

	assertEquals($result, $expect);
});
