function largestMagicSquare(grid: number[][]): number {
	const M = grid.length;
	const N = grid[0].length;

	const sum_col = Array.from({ length: M + 1 }, () => Array(N + 1).fill(0));
	const sum_row = Array.from({ length: M + 1 }, () => Array(N + 1).fill(0));
	const sum_diag_1 = Array.from({ length: M + 1 }, () => Array(N + 1).fill(0));
	const sum_diag_2 = Array.from({ length: M + 1 }, () => Array(N + 1).fill(0));

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			const cell = grid[m][n];

			sum_col[m + 1][n + 1] = sum_col[m][n + 1] + cell;
			sum_row[m + 1][n + 1] = sum_row[m + 1][n] + cell;
			sum_diag_1[m + 1][n + 1] = sum_diag_1[m][n] + cell;
			sum_diag_2[m + 1][n] = sum_diag_2[m][n + 1] + cell;
		}
	}

	const isMagic = (k: number): boolean => {
		for (let m = 0; m <= M - k; m++) {
			for (let n = 0; n <= N - k; n++) {
				const diag_1 = sum_diag_1[m + k][n + k] - sum_diag_1[m][n];
				const diag_2 = sum_diag_2[m + k][n] - sum_diag_2[m][n + k];

				if (diag_1 !== diag_2) continue;

				let isValidSum = true;

				for (let j = 0; j < k && isValidSum; j++) {
					const col = sum_col[m + k][n + j + 1] - sum_col[m][n + j + 1];
					const row = sum_row[m + j + 1][n + k] - sum_row[m + j + 1][n];

					if (col !== diag_1 || row !== diag_1) isValidSum = false;
				}

				if (isValidSum) return true;
			}
		}

		return false;
	};

	for (let k = Math.min(M, N); k >= 2; k--) {
		if (isMagic(k)) return k;
	}

	return 1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [
		[7, 1, 4, 5, 6],
		[2, 5, 1, 6, 4],
		[1, 5, 4, 3, 2],
		[1, 2, 7, 3, 4],
	];

	const $result = largestMagicSquare(grid);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [
		[5, 1, 3, 1],
		[9, 3, 3, 1],
		[1, 3, 3, 8],
	];

	const $result = largestMagicSquare(grid);
	const $expect = 2;

	assertEquals($result, $expect);
});
