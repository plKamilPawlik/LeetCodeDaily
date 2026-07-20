function findGCD(nums: number[]): number {
	let min = nums[0];
	let max = nums[0];

	for (const num of nums) {
		if (num < min) min = num;
		if (num > max) max = num;
	}

	const gdc = (a: number, b: number): number => {
		return b === 0 ? a : gdc(b, a % b);
	};

	return gdc(min, max);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [2, 5, 6, 9, 10];

	const $result = findGCD(nums);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [7, 5, 6, 8, 3];

	const $result = findGCD(nums);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [3, 3];

	const $result = findGCD(nums);
	const $expect = 3;

	assertEquals($result, $expect);
});
