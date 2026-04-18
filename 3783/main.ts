function reverse(n: number): number {
	let reversed = 0;

	while (n) {
		reversed *= 10;
		reversed += n % 10;
		n = Math.floor(n / 10);
	}

	return reversed;
}

function mirrorDistance(n: number): number {
	return Math.abs(n - reverse(n));
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 25;

	const $result = mirrorDistance(n);
	const $expect = 27;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 10;

	const $result = mirrorDistance(n);
	const $expect = 9;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = 7;

	const $result = mirrorDistance(n);
	const $expect = 0;

	assertEquals($result, $expect);
});
