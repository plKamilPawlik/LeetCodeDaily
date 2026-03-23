function maxProductPath(grid: number[][]): number {
	const MOD = 1e9 + 7;
	const M = grid.length;
	const N = grid[0].length;

	const dp_high = Array.from({ length: M }, () => Array(N).fill(0));
	const dp_low = Array.from({ length: M }, () => Array(N).fill(0));

	dp_high[0][0] = dp_low[0][0] = grid[0][0];

	for (let i = 1; i < M; i++) {
		dp_high[i][0] = dp_low[i][0] = dp_low[i - 1][0] * grid[i][0];
	}

	for (let j = 1; j < N; j++) {
		dp_high[0][j] = dp_low[0][j] = dp_low[0][j - 1] * grid[0][j];
	}

	for (let i = 1; i < M; i++) {
		for (let j = 1; j < N; j++) {
			const a = grid[i][j] * dp_high[i - 1][j];
			const b = grid[i][j] * dp_high[i][j - 1];
			const c = grid[i][j] * dp_low[i - 1][j];
			const d = grid[i][j] * dp_low[i][j - 1];

			dp_high[i][j] = Math.max(a, b, c, d);
			dp_low[i][j] = Math.min(a, b, c, d);
		}
	}

	return Math.max(dp_high[M - 1][N - 1], -1) % MOD;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [[-1, -2, -3], [-2, -3, -3], [-3, -3, -2]];

	const $result = maxProductPath(grid);
	const $expect = -1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [[1, -2, 1], [1, -2, 1], [3, -4, 1]];

	const $result = maxProductPath(grid);
	const $expect = 8;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const grid = [[1, 3], [0, -4]];

	const $result = maxProductPath(grid);
	const $expect = 0;

	assertEquals($result, $expect);
});
