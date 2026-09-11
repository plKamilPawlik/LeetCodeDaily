function totalNumbers(digits: number[]): number {
	const uniqueNumbers = new Set<number>();

	for (let i = 0; i < digits.length; i++) {
		if (digits[i] === 0) continue;

		for (let j = 0; j < digits.length; j++) {
			if (j === i) continue;

			for (let k = 0; k < digits.length; k++) {
				if (digits[k] & 1) continue;
				if (k === i) continue;
				if (k === j) continue;

				const a = digits[i];
				const b = digits[j];
				const c = digits[k];

				uniqueNumbers.add(100 * a + 10 * b + c);
			}
		}
	}

	return uniqueNumbers.size;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const digits = [1, 2, 3, 4];

	const $result = totalNumbers(digits);
	const $expect = 12;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const digits = [0, 2, 2];

	const $result = totalNumbers(digits);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const digits = [6, 6, 6];

	const $result = totalNumbers(digits);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 4", () => {
	const digits = [1, 3, 5];

	const $result = totalNumbers(digits);
	const $expect = 0;

	assertEquals($result, $expect);
});
