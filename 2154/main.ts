function findFinalValue(nums: number[], original: number): number {
	nums.sort((a, b) => a - b);

	for (const num of nums) {
		if (num === original) original *= 2;
	}

	return original;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const nums = [5, 3, 6, 1, 12];
	const original = 3;

	const $result = findFinalValue(nums, original);
	const $expect = 24;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const nums = [2, 7, 9];
	const original = 4;

	const $result = findFinalValue(nums, original);
	const $expect = 4;

	assertEquals($result, $expect);
});
