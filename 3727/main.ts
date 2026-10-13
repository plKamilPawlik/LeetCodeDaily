function maxAlternatingSum(nums: number[]): number {
	const squares = nums.map((num) => num ** 2);
	const sorted = squares.sort((a, b) => b - a);

	let sum = sorted.length & 1 ? sorted[sorted.length >> 1] : 0;

	for (let i = 0; i < ((sorted.length / 2) | 0); i++) {
		sum += sorted[i] - sorted[sorted.length - i - 1];
	}

	return sum;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 2, 3];

	const $result = maxAlternatingSum(nums);
	const $expect = 12;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, -1, 2, -2, 3, -3];

	const $result = maxAlternatingSum(nums);
	const $expect = 16;

	assertEquals($result, $expect);
});
