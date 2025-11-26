function numberOfPaths(grid: number[][], k: number): number {
	const M = grid.length;
	const N = grid[0].length;

	const dp = Array.from(
		{ length: M },
		() => Array.from({ length: N }, () => new Array<number>(k).fill(0)),
	);

	let mod_m0 = 0;

	for (let n = 0; n < N; n++) {
		mod_m0 += grid[0][n];
		mod_m0 %= k;

		dp[0][n][mod_m0] = 1;
	}

	let mod_n0 = 0;

	for (let m = 0; m < M; m++) {
		mod_n0 += grid[m][0];
		mod_n0 %= k;

		dp[m][0][mod_n0] = 1;
	}

	for (let m = 1; m < M; m++) {
		for (let n = 1; n < N; n++) {
			for (let i = 0; i < k; i++) {
				if (dp[m - 1][n][i] === 0) continue;

				const mod = (grid[m][n] + i) % k;
				dp[m][n][mod] += dp[m - 1][n][i];
				dp[m][n][mod] %= 1e9 + 7;
			}

			for (let i = 0; i < k; i++) {
				if (dp[m][n - 1][i] === 0) continue;

				const mod = (grid[m][n] + i) % k;
				dp[m][n][mod] += dp[m][n - 1][i];
				dp[m][n][mod] %= 1e9 + 7;
			}
		}
	}

	return dp[M - 1][N - 1][0];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const grid = [[5, 2, 4], [3, 0, 5], [0, 7, 2]];
	const k = 3;

	const $result = numberOfPaths(grid, k);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const grid = [[0, 0]];
	const k = 5;

	const $result = numberOfPaths(grid, k);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const grid = [[7, 3, 4, 9], [2, 3, 6, 2], [2, 3, 7, 0]];
	const k = 1;

	const $result = numberOfPaths(grid, k);
	const $expect = 10;

	assertEquals($result, $expect);
});
