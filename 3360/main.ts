function canAliceWin(n: number): boolean {
	let isAliceTurn = true;
	let removeCount = 10;

	while (n - removeCount >= 0) {
		n -= removeCount;
		removeCount--;
		isAliceTurn = !isAliceTurn;
	}

	return !isAliceTurn;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n: number = 12;

	const $result = canAliceWin(n);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n: number = 1;

	const $result = canAliceWin(n);
	const $expect = false;

	assertEquals($result, $expect);
});
