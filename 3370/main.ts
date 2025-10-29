function smallestNumber(n: number): number {
	let lastBitSet = 0;

	for (let i = 0; i < 10; i++) {
		if (n & (1 << i)) lastBitSet = i;
	}

	return 2 ** (lastBitSet + 1) - 1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const n = 5;

	const $result = smallestNumber(n);
	const $expect = 7;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const n = 10;

	const $result = smallestNumber(n);
	const $expect = 15;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const n = 3;

	const $result = smallestNumber(n);
	const $expect = 3;

	assertEquals($result, $expect);
});
