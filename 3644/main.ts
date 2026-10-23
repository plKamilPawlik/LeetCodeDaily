function sortPermutation(nums: number[]): number {
	let b = NaN;

	for (let i = 0; i < nums.length; i++) {
		if (i !== nums[i]) {
			b = Number.isNaN(b) ? nums[i] : b & nums[i];
		}
	}

	return b || 0;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [0, 3, 2, 1];

	const $result = sortPermutation(nums);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [0, 1, 3, 2];

	const $result = sortPermutation(nums);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [3, 2, 1, 0];

	const $result = sortPermutation(nums);
	const $expect = 0;

	assertEquals($result, $expect);
});
