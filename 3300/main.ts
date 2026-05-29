function minElement(nums: number[]): number {
	const sumDigits = (num: number): number => {
		let sum = 0;

		while (num > 0) {
			sum += num % 10;
			num = Math.floor(num / 10);
		}

		return sum;
	};

	let min = Infinity;

	for (const num of nums) {
		min = Math.min(min, sumDigits(num));
	}

	return min;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [10, 12, 13, 14];

	const $result = minElement(nums);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 2, 3, 4];

	const $result = minElement(nums);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [999, 19, 199];

	const $result = minElement(nums);
	const $expect = 10;

	assertEquals($result, $expect);
});
