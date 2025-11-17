function kLengthApart(nums: number[], k: number): boolean {
	let lastIndex = -Infinity;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			if (i - lastIndex <= k) return false;
			else lastIndex = i;
		}
	}

	return true;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const nums = [1, 0, 0, 0, 1, 0, 0, 1];
	const k = 2;

	const $result = kLengthApart(nums, k);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const nums = [1, 0, 0, 1, 0, 1];
	const k = 2;

	const $result = kLengthApart(nums, k);
	const $expect = false;

	assertEquals($result, $expect);
});
