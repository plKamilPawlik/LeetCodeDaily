function rangeAddQueries(n: number, queries: number[][]): number[][] {
	const matrix = Array.from({ length: n }, () => new Array<number>(n).fill(0));

	for (const [row1, col1, row2, col2] of queries) {
		for (let i = row1; i <= row2; i++) {
			matrix[i][col1]++;

			if (col2 < n - 1) matrix[i][col2 + 1]--;
		}
	}

	for (let i = 0; i < n; i++) {
		for (let j = 1; j < n; j++) {
			matrix[i][j] += matrix[i][j - 1];
		}
	}

	return matrix;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const n = 3;
	const queries = [[1, 1, 2, 2], [0, 0, 1, 1]];

	const $result = rangeAddQueries(n, queries);
	const $expect = [[1, 1, 0], [1, 2, 1], [0, 1, 1]];

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const n = 2;
	const queries = [[0, 0, 1, 1]];

	const $result = rangeAddQueries(n, queries);
	const $expect = [[1, 1], [1, 1]];

	assertEquals($result, $expect);
});
