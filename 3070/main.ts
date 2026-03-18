function countSubmatrices(grid: number[][], k: number): number {
	const M = grid.length;
	const N = grid[0].length;

	let count = 0;

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			if (m > 0) grid[m][n] += grid[m - 1][n];
			if (n > 0) grid[m][n] += grid[m][n - 1];
			if (m * n) grid[m][n] -= grid[m - 1][n - 1];

			if (grid[m][n] <= k) count++;
		}
	}

	return count;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [[7, 6, 3], [6, 6, 1]], k = 18;

	const $result = countSubmatrices(grid, k);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [[7, 2, 9], [1, 5, 0], [2, 6, 6]], k = 20;

	const $result = countSubmatrices(grid, k);
	const $expect = 6;

	assertEquals($result, $expect);
});
