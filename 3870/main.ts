function countCommas(n: number): number {
	return Math.max(0, n - 999);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 1002;

	const $result = countCommas(n);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 998;

	const $result = countCommas(n);
	const $expect = 0;

	assertEquals($result, $expect);
});
