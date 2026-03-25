function canPartitionGrid(grid: number[][]): boolean {
	const M = grid.length;
	const N = grid[0].length;

	const prefix_rows = Array(M).fill(0);
	const prefix_cols = Array(N).fill(0);

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) prefix_rows[m] += grid[m][n];
	}

	for (let n = 0; n < N; n++) {
		for (let m = 0; m < M; m++) prefix_cols[n] += grid[m][n];
	}

	let sum_rows_p = 0, sum_rows_q = prefix_rows.reduce((prev, curr) => prev + curr, 0);
	let sum_cols_p = 0, sum_cols_q = prefix_cols.reduce((prev, curr) => prev + curr, 0);

	for (let m = 0; m < M - 1; m++) {
		sum_rows_p += prefix_rows[m];
		sum_rows_q -= prefix_rows[m];

		if (sum_rows_p === sum_rows_q) return true;
	}

	for (let n = 0; n < N - 1; n++) {
		sum_cols_p += prefix_cols[n];
		sum_cols_q -= prefix_cols[n];

		if (sum_cols_p === sum_cols_q) return true;
	}

	return false;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [[1, 4], [2, 3]];

	const $result = canPartitionGrid(grid);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [[1, 3], [2, 4]];

	const $result = canPartitionGrid(grid);
	const $expect = false;

	assertEquals($result, $expect);
});
