function rotatedDigits(n: number): number {
	const $ = [0, 1, 5, NaN, NaN, 2, 9, NaN, 8, 6];
	let count = 0;

	for (let i = 1; i <= n; i++) {
		let num = i;

		let hasFlip = false;
		let isValid = true;

		while (isValid && num > 0) {
			const digit = num % 10;

			if (Number.isNaN($[digit])) {
				isValid = false;
			}

			if (digit !== $[digit]) {
				hasFlip = true;
			}

			num = Math.floor(num / 10);
		}

		if (isValid && hasFlip) count++;
	}

	return count;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 10;

	const $result = rotatedDigits(n);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 1;

	const $result = rotatedDigits(n);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = 2;

	const $result = rotatedDigits(n);
	const $expect = 1;

	assertEquals($result, $expect);
});
