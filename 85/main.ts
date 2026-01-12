function maximalRectangle(matrix: string[][]): number {
	const M = matrix.length;
	const N = matrix[0].length;

	const prefix = matrix.map((row) => row.map((str) => +str));

	for (let m = 0; m < M; m++) {
		for (let n = 1; n < N; n++) {
			if (prefix[m][n] > 0) prefix[m][n] = prefix[m][n - 1] + 1;
		}
	}

	let maxSize = 0;
	let minWidth = 0;

	for (let n = 0; n < N; n++) {
		for (let m = 0; m < M; m++) {
			if (prefix[m][n] === 0) continue;

			minWidth = prefix[m][n];

			for (let k = m; k < M && prefix[k][n] > 0; k++) {
				minWidth = Math.min(minWidth, prefix[k][n]);
				maxSize = Math.max(maxSize, minWidth * (k - m + 1));
			}

			minWidth = prefix[m][n];

			for (let k = m; k >= 0 && prefix[k][n] > 0; k--) {
				minWidth = Math.min(minWidth, prefix[k][n]);
				maxSize = Math.max(maxSize, minWidth * (m - k + 1));
			}
		}
	}

	return maxSize;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const matrix = [
		["1", "0", "1", "0", "0"],
		["1", "0", "1", "1", "1"],
		["1", "1", "1", "1", "1"],
		["1", "0", "0", "1", "0"],
	];

	const $result = maximalRectangle(matrix);
	const $expect = 6;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const matrix = [["0"]];

	const $result = maximalRectangle(matrix);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const matrix = [["1"]];

	const $result = maximalRectangle(matrix);
	const $expect = 1;

	assertEquals($result, $expect);
});
