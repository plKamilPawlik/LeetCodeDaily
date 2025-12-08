function countOdds(low: number, high: number): number {
	return Math.ceil((high - low) * 0.5) + ((high % 2) & (low % 2));
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const low = 3;
	const high = 7;

	const $result = countOdds(low, high);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const low = 8;
	const high = 10;

	const $result = countOdds(low, high);
	const $expect = 1;

	assertEquals($result, $expect);
});
