function maxPathScore(grid: number[][], k: number): number {
	const M = grid.length;
	const N = grid[0].length;

	const dp = grid.map((row) => row.map(() => Array<number>(k + 1).fill(-Infinity)));
	dp[0][0][0] = 0;

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			for (let c = 0; c <= k; c++) {
				if (dp[m][n][c] === -Infinity) continue;

				if (m + 1 < M) {
					const value = grid[m + 1][n];
					const cost = value ? 1 : 0;

					if (c + cost <= k) {
						dp[m + 1][n][c + cost] = Math.max(
							dp[m + 1][n][c + cost],
							dp[m][n][c] + value,
						);
					}
				}

				if (n + 1 < N) {
					const value = grid[m][n + 1];
					const cost = value ? 1 : 0;

					if (c + cost <= k) {
						dp[m][n + 1][c + cost] = Math.max(
							dp[m][n + 1][c + cost],
							dp[m][n][c] + value,
						);
					}
				}
			}
		}
	}

	const ans = Math.max(...dp[M - 1][N - 1]);
	return ans >= 0 ? ans : -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [[0, 1], [2, 0]], k = 1;

	const $result = maxPathScore(grid, k);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [[0, 1], [1, 2]], k = 1;

	const $result = maxPathScore(grid, k);
	const $expect = -1;

	assertEquals($result, $expect);
});
