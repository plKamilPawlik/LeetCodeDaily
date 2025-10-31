function getSneakyNumbers(nums: number[]): number[] {
	const unuqueNumbers = new Set<number>();
	const sneakyNumbers = new Array<number>();

	for (const num of nums) {
		if (unuqueNumbers.has(num)) sneakyNumbers.push(num);
		else unuqueNumbers.add(num);
	}

	return sneakyNumbers;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertArrayIncludes } from "@std/assert";

Deno.test("1", () => {
	const nums = [0, 1, 1, 0];

	const $result = getSneakyNumbers(nums);
	const $expect = [0, 1];

	assertArrayIncludes($result, $expect);
});

Deno.test("2", () => {
	const nums = [0, 3, 2, 1, 3, 2];

	const $result = getSneakyNumbers(nums);
	const $expect = [2, 3];

	assertArrayIncludes($result, $expect);
});

Deno.test("3", () => {
	const nums = [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2];

	const $result = getSneakyNumbers(nums);
	const $expect = [4, 5];

	assertArrayIncludes($result, $expect);
});
