function largestSubmatrix(matrix: number[][]): number {
	const M = matrix.length;
	const N = matrix[0].length;

	let ans = 0;

	for (let m = 1; m < M; m++) {
		for (let n = 0; n < N; n++) {
			if (matrix[m][n]) matrix[m][n] += matrix[m - 1][n];
		}
	}

	for (let m = 0; m < M; m++) {
		matrix[m].sort((a, b) => b - a);

		for (let n = 0; n < N; n++) {
			ans = Math.max(ans, matrix[m][n] * (n + 1));
		}
	}

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const matrix = [[0, 0, 1], [1, 1, 1], [1, 0, 1]];

	const $result = largestSubmatrix(matrix);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const matrix = [[1, 0, 1, 0, 1]];

	const $result = largestSubmatrix(matrix);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const matrix = [[1, 1, 0], [1, 0, 1]];

	const $result = largestSubmatrix(matrix);
	const $expect = 2;

	assertEquals($result, $expect);
});
