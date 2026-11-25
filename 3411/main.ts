function gdc(a: number, b: number): number {
	while (b) [a, b] = [b, a % b];
	return a;
}

function maxLength(nums: number[]): number {
	let prod = 1;
	let res = 2;

	let p = 0;
	let q = 0;

	while (q < nums.length) {
		while (gdc(prod, nums[q]) > 1) {
			prod = Math.floor(prod / nums[p++]);
		}

		prod *= nums[q];
		res = Math.max(res, ++q - p);
	}

	return res;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums: number[] = [1, 2, 1, 2, 1, 1, 1];

	const $result = maxLength(nums);
	const $expect = 5;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums: number[] = [2, 3, 4, 5, 6];

	const $result = maxLength(nums);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums: number[] = [1, 2, 3, 1, 4, 5, 1];

	const $result = maxLength(nums);
	const $expect = 5;

	assertEquals($result, $expect);
});
