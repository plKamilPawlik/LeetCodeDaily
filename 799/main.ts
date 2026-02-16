function champagneTower(poured: number, query_row: number, query_glass: number): number {
	const tower = Array.from({ length: 100 }, (_, i) => Array(i + 1).fill(0));
	tower[0][0] = poured;

	for (let i = 0; i < tower.length - 1; i++) {
		for (let j = 0; j < tower[i].length; j++) {
			const overflow = Math.max(tower[i][j] - 1, 0);

			tower[i + 1][j] += overflow / 2;
			tower[i + 1][j + 1] += overflow / 2;
		}
	}

	return Math.min(tower[query_row][query_glass], 1);
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
