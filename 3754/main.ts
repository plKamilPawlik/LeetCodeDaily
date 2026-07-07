function sumAndMultiply(n: number): number {
	const digits: number[] = [];

	while (n) {
		digits.push(n % 10);
		n = Math.floor(n / 10);
	}

	let sum = 0;
	let x = 0;

	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] === 0) continue;

		x *= 10;
		x += digits[i];
		sum += digits[i];
	}

	return x * sum;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 10203004;

	const $result = sumAndMultiply(n);
	const $expect = 12340;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 1000;

	const $result = sumAndMultiply(n);
	const $expect = 1;

	assertEquals($result, $expect);
});
