function getMinDistance(nums: number[], target: number, start: number): number {
	let minDistance = Infinity;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== target) continue;

		if (minDistance > Math.abs(i - start)) {
			minDistance = Math.abs(i - start);
		}
	}

	return minDistance;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 2, 3, 4, 5], target = 5, start = 3;

	const $result = getMinDistance(nums, target, start);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1], target = 1, start = 0;

	const $result = getMinDistance(nums, target, start);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], target = 1, start = 0;

	const $result = getMinDistance(nums, target, start);
	const $expect = 0;

	assertEquals($result, $expect);
});
