function bitwiseComplement(n: number): number {
	let complement = 0;
	let offsetBits = 1;

	do {
		complement += n & offsetBits ? 0 : offsetBits;
		offsetBits <<= 1;
	} while (n > offsetBits);

	return complement;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 5;

	const $result = bitwiseComplement(n);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 7;

	const $result = bitwiseComplement(n);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = 10;

	const $result = bitwiseComplement(n);
	const $expect = 5;

	assertEquals($result, $expect);
});
