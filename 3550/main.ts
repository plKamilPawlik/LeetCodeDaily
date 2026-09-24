function sumDigits(num: number): number {
	let sum = 0;

	while (num > 0) {
		sum += num % 10;
		num = num / 10 | 0;
	}

	return sum;
}

function smallestIndex(nums: number[]): number {
	for (let i = 0; i < nums.length; i++) {
		if (sumDigits(nums[i]) === i) return i;
	}

	return -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 3, 2];

	const $result = smallestIndex(nums);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 10, 11];

	const $result = smallestIndex(nums);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [1, 2, 3];

	const $result = smallestIndex(nums);
	const $expect = -1;

	assertEquals($result, $expect);
});
