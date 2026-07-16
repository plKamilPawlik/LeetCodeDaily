function gcdOfOddEvenSums(n: number): number {
	const gcd = (x: number, y: number): number => {
		return y === 0 ? x : gcd(y, x % y);
	};

	return gcd(n ** 2, n ** 2 + n);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 4;

	const $result = gcdOfOddEvenSums(n);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 5;

	const $result = gcdOfOddEvenSums(n);
	const $expect = 5;

	assertEquals($result, $expect);
});
