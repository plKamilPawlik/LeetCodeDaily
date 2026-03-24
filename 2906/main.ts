function constructProductMatrix(grid: number[][]): number[][] {
	const M = grid.length;
	const N = grid[0].length;

	const result = Array.from({ length: M }, () => Array(N).fill(0));
	const modulo = 12345;

	let suffix = 1;
	let prefix = 1;

	for (let m = M - 1; m >= 0; m--) {
		for (let n = N - 1; n >= 0; n--) {
			result[m][n] = suffix;

			suffix *= grid[m][n];
			suffix %= modulo;
		}
	}

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			result[m][n] *= prefix;
			result[m][n] %= modulo;

			prefix *= grid[m][n];
			prefix %= modulo;
		}
	}

	return result;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [[1, 2], [3, 4]];

	const $result = constructProductMatrix(grid);
	const $expect = [[24, 12], [8, 6]];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [[12345], [2], [1]];

	const $result = constructProductMatrix(grid);
	const $expect = [[2], [0], [0]];

	assertEquals($result, $expect);
});
