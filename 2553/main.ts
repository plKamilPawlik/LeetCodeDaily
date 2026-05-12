function separateDigits(nums: number[]): number[] {
	const string = nums.join("");
	const digits = [...string].map((d) => Number(d));

	return digits;
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
