function hasAlternatingBits(n: number): boolean {
	let b = BigInt(n);
	let f = b & 1n;

	while (b) {
		if ((b & 1n) !== f) return false;

		b >>= 1n;
		f ^= 1n;
	}

	return true;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 5;

	const $result = hasAlternatingBits(n);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 7;

	const $result = hasAlternatingBits(n);
	const $expect = false;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = 11;

	const $result = hasAlternatingBits(n);
	const $expect = false;

	assertEquals($result, $expect);
});
