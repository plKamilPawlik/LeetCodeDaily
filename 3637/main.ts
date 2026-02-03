function isTrionic(nums: number[]): boolean {
	let idx = 1;

	while (idx < nums.length && nums[idx - 1] < nums[idx]) idx++;
	if (idx === 1) return false;

	const p = idx;

	while (idx < nums.length && nums[idx - 1] > nums[idx]) idx++;
	if (idx === p) return false;

	const q = idx;

	while (idx < nums.length && nums[idx - 1] < nums[idx]) idx++;
	if (idx === q) return false;

	return idx == nums.length;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 3, 5, 4, 2, 6];

	const $result = isTrionic(nums);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [2, 1, 3];

	const $result = isTrionic(nums);
	const $expect = false;

	assertEquals($result, $expect);
});
