function isGood(nums: number[]): boolean {
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] !== i + 1) return false;
	}

	return nums.at(-1) === nums.at(-2);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [2, 1, 3];

	const $result = isGood(nums);
	const $expect = false;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 3, 3, 2];

	const $result = isGood(nums);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [1, 1];

	const $result = isGood(nums);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 4", () => {
	const nums = [3, 4, 4, 1, 2, 1];

	const $result = isGood(nums);
	const $expect = false;

	assertEquals($result, $expect);
});
