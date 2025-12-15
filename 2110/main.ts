function getDescentPeriods(prices: number[]): number {
	let totalDescents = 0;

	let p: number = 0;
	let q: number;

	while (p < prices.length) {
		q = p + 1;

		while (prices[q - 1] - prices[q] === 1) q++;
		totalDescents += ((q - p + 1) * (q - p)) * 0.5;

		p = q;
	}

	return totalDescents;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const prices = [3, 2, 1, 4];

	const $result = getDescentPeriods(prices);
	const $expect = 7;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const prices = [8, 6, 7, 7];

	const $result = getDescentPeriods(prices);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const prices = [1];

	const $result = getDescentPeriods(prices);
	const $expect = 1;

	assertEquals($result, $expect);
});
