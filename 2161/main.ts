function pivotArray(nums: number[], pivot: number): number[] {
	const eq: number[] = [];
	const lt: number[] = [];
	const gt: number[] = [];

	for (const num of nums) {
		if (num === pivot) eq.push(num);
		if (num < pivot) lt.push(num);
		if (num > pivot) gt.push(num);
	}

	return lt.concat(eq).concat(gt);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [9, 12, 5, 10, 14, 3, 10], pivot = 10;

	const $result = pivotArray(nums, pivot);
	const $expect = [9, 5, 3, 10, 10, 12, 14];

	assertEquals($result, $expect);
});

Deno.test("Case 1", () => {
	const nums = [-3, 4, 3, 2], pivot = 2;

	const $result = pivotArray(nums, pivot);
	const $expect = [-3, 2, 4, 3];

	assertEquals($result, $expect);
});
