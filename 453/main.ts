function minMoves(nums: number[]): number {
	const min = Math.min(...nums);
	let ans = 0;

	for (const num of nums) {
		ans += num - min;
	}

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 2, 3];

	const $result = minMoves(nums);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 1, 1];

	const $result = minMoves(nums);
	const $expect = 0;

	assertEquals($result, $expect);
});
