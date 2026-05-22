function findPivot(nums: number[]): number {
	let p = 0;
	let q = nums.length - 1;

	while (p < q) {
		const mid = (p + q) >> 1;

		if (nums[mid] > nums[q]) {
			p = mid + 1;
		} else {
			q = mid;
		}
	}

	return p;
}

function search(nums: number[], target: number): number {
	const pivot = findPivot(nums);
	const max = nums.at(pivot - 1)!;
	const min = nums.at(pivot)!;

	if (target > max) return -1;
	if (target < min) return -1;

	let p: number;
	let q: number;

	if (target > nums.at(-1)!) {
		p = 0;
		q = pivot - 1;
	} else {
		p = pivot;
		q = nums.length - 1;
	}

	while (p < q) {
		const mid = (p + q) >> 1;

		if (target > nums[mid]) {
			p = mid + 1;
		} else {
			q = mid;
		}
	}

	return target === nums[p] ? p : -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [4, 5, 6, 7, 0, 1, 2], target = 0;

	const $result = search(nums, target);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [4, 5, 6, 7, 0, 1, 2], target = 3;

	const $result = search(nums, target);
	const $expect = -1;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [1], target = 0;

	const $result = search(nums, target);
	const $expect = -1;

	assertEquals($result, $expect);
});
