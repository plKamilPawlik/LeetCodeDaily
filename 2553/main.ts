function parseDigits(num: number): number[] {
	const digits = [num % 10];

	while ((num = Math.floor(num / 10))) {
		digits.push(num % 10);
	}

	return digits.reverse();
}

function separateDigits(nums: number[]): number[] {
	return nums.map(parseDigits).flat();
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [13, 25, 83, 77];

	const $result = separateDigits(nums);
	const $expect = [1, 3, 2, 5, 8, 3, 7, 7];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [7, 1, 3, 9];

	const $result = separateDigits(nums);
	const $expect = [7, 1, 3, 9];

	assertEquals($result, $expect);
});
