function targetIndices(nums: number[], target: number): number[] {
	return nums.sort((a, b) => a - b).reduce((indices, val, idx) => {
		if (val === target) indices.push(idx);
		return indices;
	}, <number[]> []);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 2, 5, 2, 3], target = 2;

	const $result = targetIndices(nums, target);
	const $expect = [1, 2];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 2, 5, 2, 3], target = 3;

	const $result = targetIndices(nums, target);
	const $expect = [3];

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [1, 2, 5, 2, 3], target = 5;

	const $result = targetIndices(nums, target);
	const $expect = [4];

	assertEquals($result, $expect);
});
