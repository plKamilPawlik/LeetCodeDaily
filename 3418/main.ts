function maximumAmount(coins: number[][]): number {
	const M = coins.length;
	const N = coins[0].length;

	const memo = coins.map((row) => row.map(() => Array(3).fill(-Infinity)));
	const dfs = (i: number, j: number, k: number): number => {
		if (i < 0 || i >= M) return -Infinity;
		if (j < 0 || j >= N) return -Infinity;
		if (k < 0 || k >= 3) return -Infinity;

		const x = coins[i][j];

		if (i === 0 && j === 0) return k ? Math.max(0, x) : x;
		if (memo[i][j][k] > -Infinity) return memo[i][j][k];

		let res = Math.max(dfs(i - 1, j, k), dfs(i, j - 1, k)) + x;

		if (k > 0 && x < 0) {
			res = Math.max(dfs(i - 1, j, k - 1), dfs(i, j - 1, k - 1), res);
		}

		return memo[i][j][k] = res;
	};

	return dfs(M - 1, N - 1, 2);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const coins = [[0, 1, -1], [1, -2, 3], [2, -3, 4]];

	const $result = maximumAmount(coins);
	const $expect = 8;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const coins = [[10, 10, 10], [10, 10, 10]];

	const $result = maximumAmount(coins);
	const $expect = 40;

	assertEquals($result, $expect);
});
