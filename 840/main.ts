function numMagicSquaresInside(grid: number[][]): number {
	const M = grid.length;
	const N = grid[0].length;

	if (M < 3) return 0;
	if (N < 3) return 0;

	const isMagic = (m: number, n: number): boolean => {
		const numbers = new Array<number>(9).fill(0);

		for (let i = m; i < m + 3; i++) {
			for (let j = n; j < n + 3; j++) {
				if (grid[i][j] < 1) return false;
				if (grid[i][j] > 9) return false;

				if (++numbers[grid[i][j] - 1] > 1) {
					return false;
				}
			}
		}

		const lines = [
			// horizontal
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],

			// vertical
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],

			// diagonal
			[0, 4, 8],
			[2, 4, 6],
		];

		const expectedSum = 15;

		for (const line of lines) {
			let partialSum = 0;

			for (const point of line) {
				partialSum += grid[m + Math.floor(point / 3)][n + (point % 3)];
			}

			if (partialSum !== expectedSum) return false;
		}

		return true;
	};

	let result = 0;

	for (let m = 0; m <= M - 3; m++) {
		for (let n = 0; n <= N - 3; n++) {
			if (isMagic(m, n)) result++;
		}
	}

	return result;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]];

	const $result = numMagicSquaresInside(grid);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [[8]];

	const $result = numMagicSquaresInside(grid);
	const $expect = 0;

	assertEquals($result, $expect);
});
