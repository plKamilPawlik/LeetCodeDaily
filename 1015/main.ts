function smallestRepunitDivByK(k: number): number {
	if (k % 2 === 0) return -1;
	if (k % 5 === 0) return -1;

	let len = 1;
	let rem = 1 % k;

	while (rem !== 0) {
		rem *= 10;
		rem += 1;
		rem %= k;
		len++;
	}

	return len;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const k = 1;

	const $result = smallestRepunitDivByK(k);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const k = 2;

	const $result = smallestRepunitDivByK(k);
	const $expect = -1;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const k = 3;

	const $result = smallestRepunitDivByK(k);
	const $expect = 3;

	assertEquals($result, $expect);
});
