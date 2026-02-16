function champagneTower(poured: number, query_row: number, query_glass: number): number {
	if (query_row === 0) return Math.min(poured, 1);

	let curr: number[] = [poured];
	let next: number[] = [0, 0];

	for (let i = 0; i < query_row; i++) {
		for (let j = 0; j < curr.length; j++) {
			const overflow = Math.max(curr[j] - 1, 0);

			next[j] += overflow / 2;
			next[j + 1] += overflow / 2;
		}

		curr = next;
		next = Array(curr.length + 1).fill(0);
	}

	return Math.min(curr[query_glass], 1);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const poured = 1, query_row = 1, query_glass = 1;

	const $result = champagneTower(poured, query_row, query_glass);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const poured = 2, query_row = 1, query_glass = 1;

	const $result = champagneTower(poured, query_row, query_glass);
	const $expect = 0.5;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const poured = 100000009, query_row = 33, query_glass = 17;

	const $result = champagneTower(poured, query_row, query_glass);
	const $expect = 1;

	assertEquals($result, $expect);
});
