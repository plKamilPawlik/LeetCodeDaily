function maxSumTrionic(nums: number[]): number {
	let res = -Infinity;

	for (let i = 1; i < nums.length - 2; i++) {
		let a = i;
		let b = i;

		let sum = nums[i];

		// nums[p...q] is strictly decreasing
		while (b + 1 < nums.length && nums[b + 1] < nums[b]) {
			sum += nums[++b];
		}

		if (a === b) continue;

		const c = b;
		let p = 0, px = -Infinity;
		let q = 0, qx = -Infinity;

		// nums[l...p] is strictly increasing
		while (a - 1 >= 0 && nums[a - 1] < nums[a]) {
			p += nums[--a];
			px = Math.max(px, p);
		}

		if (a === i) continue;

		// nums[q...r] is strictly increasing
		while (b + 1 < nums.length && nums[b + 1] > nums[b]) {
			q += nums[++b];
			qx = Math.max(qx, q);
		}

		if (b === c) continue;

		res = Math.max(res, sum + px + qx);
		i = b - 1;
	}

	return res;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [0, -2, -1, -3, 0, 2, -1];

	const $result = maxSumTrionic(nums);
	const $expect = -4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 4, 2, 7];

	const $result = maxSumTrionic(nums);
	const $expect = 14;

	assertEquals($result, $expect);
});
