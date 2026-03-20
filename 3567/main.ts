function minAbsDiff(grid: number[][], k: number): number[][] {
	const M = grid.length;
	const N = grid[0].length;

	const ans = Array.from({ length: M - k + 1 }, () => Array<number>(N - k + 1));
	const abs = (m: number, n: number): number => {
		const uniqueValues = new Set<number>();

		for (let i = m; i < m + k; i++) {
			for (let j = n; j < n + k; j++) {
				uniqueValues.add(grid[i][j]);
			}
		}

		if (uniqueValues.size === 1) return 0;

		const sortedValues = [...uniqueValues].sort((a, b) => a - b);
		let minAbsDiff = +Infinity;

		for (let i = 1; i < sortedValues.length; i++) {
			minAbsDiff = Math.min(minAbsDiff, Math.abs(sortedValues[i] - sortedValues[i - 1]));
		}

		return minAbsDiff;
	};

	for (let m = 0; m < M - k + 1; m++) {
		for (let n = 0; n < N - k + 1; n++) {
			ans[m][n] = abs(m, n);
		}
	}

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [[1, 8], [3, -2]], k = 2;

	const $result = minAbsDiff(grid, k);
	const $expect = [[2]];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [[3, -1]], k = 1;

	const $result = minAbsDiff(grid, k);
	const $expect = [[0, 0]];

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const grid = [[1, -2, 3], [2, 3, 5]], k = 2;

	const $result = minAbsDiff(grid, k);
	const $expect = [[1, 2]];

	assertEquals($result, $expect);
});
