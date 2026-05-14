function isGood(nums: number[]): boolean {
	const count = new Array<number>(nums.length).fill(0);

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= nums.length) return false;
		count[nums[i]]++;
	}

	for (let i = 1; i < count.length; i++) {
		if (!count[i]) return false;
	}

	return count.at(-1) === 2;
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
