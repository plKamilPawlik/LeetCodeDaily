function prefixesDivBy5(nums: number[]): boolean[] {
	let acc = 0;

	return nums.map((_, i) => {
		acc *= 2;
		acc += nums[i];
		acc %= 5;

		return acc === 0;
	});
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const nums = [0, 1, 1];

	const $result = prefixesDivBy5(nums);
	const $expect = [true, false, false];

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const nums = [1, 1, 1];

	const $result = prefixesDivBy5(nums);
	const $expect = [false, false, false];

	assertEquals($result, $expect);
});
