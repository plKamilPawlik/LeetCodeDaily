function reverseBits(n: number): number {
	const bits: number[] = [];

	for (let i = 31; i >= 0; i--) {
		const pow = 2 ** i;

		if (pow > n) {
			bits.push(0);
		} else {
			bits.push(1);
			n -= pow;
		}
	}

	let ans = 0;

	for (let i = 31; i >= 0; i--) {
		if (bits[i]) ans += 2 ** i;
	}

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 43261596;

	const $result = reverseBits(n);
	const $expect = 964176192;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 2147483644;

	const $result = reverseBits(n);
	const $expect = 1073741822;

	assertEquals($result, $expect);
});
