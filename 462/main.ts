function minMoves2(nums: number[]): number {
	nums.sort((a, b) => a - b);

	const med = nums[nums.length >> 1];
	let ans = 0;

	for (const num of nums) {
		ans += Math.abs(med - num);
	}

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 2, 3];

	const $result = minMoves2(nums);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 10, 2, 9];

	const $result = minMoves2(nums);
	const $expect = 16;

	assertEquals($result, $expect);
});
