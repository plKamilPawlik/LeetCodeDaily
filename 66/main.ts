function plusOne(digits: number[]): number[] {
	digits[digits.length - 1]++;

	for (let i = digits.length - 1; i > 0; i--) {
		if (digits[i] >= 10) {
			digits[i] %= 10;
			digits[i - 1]++;
		} else break;
	}

	if (digits[0] >= 10) {
		digits[0] %= 10;
		digits.unshift(1);
	}

	return digits;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const digits = [1, 2, 3];

	const $result = plusOne(digits);
	const $expect = [1, 2, 4];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const digits = [4, 3, 2, 1];

	const $result = plusOne(digits);
	const $expect = [4, 3, 2, 2];

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const digits = [9];

	const $result = plusOne(digits);
	const $expect = [1, 0];

	assertEquals($result, $expect);
});
