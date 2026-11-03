function minMoves(nums: number[]): number {
	const max = Math.max(...nums);
	let ans = 0;

	for (const num of nums) {
		ans += max - num;
	}

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [2, 1, 3];

	const $result = minMoves(nums);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [4, 4, 5];

	const $result = minMoves(nums);
	const $expect = 2;

	assertEquals($result, $expect);
});
