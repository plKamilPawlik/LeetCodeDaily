function minimumCost(cost: number[]): number {
	cost.sort((a, b) => b - a);
	const paid = cost.filter((_, i) => (i + 1) % 3);

	return paid.reduce((p, c) => p + c);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const cost = [1, 2, 3];

	const $result = minimumCost(cost);
	const $expect = 5;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const cost = [6, 5, 7, 9, 2, 2];

	const $result = minimumCost(cost);
	const $expect = 23;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const cost = [5, 5];

	const $result = minimumCost(cost);
	const $expect = 10;

	assertEquals($result, $expect);
});
