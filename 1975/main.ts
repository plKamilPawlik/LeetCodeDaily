function maxMatrixSum(matrix: number[][]): number {
	const M = matrix.length;
	const N = matrix[0].length;

	let min = Infinity;
	let neg = 0;
	let sum = 0;

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			const abs = Math.abs(matrix[m][n]);
			const sign = Math.sign(matrix[m][n]);

			if (sign === -1) neg++;
			if (min > abs) min = abs;

			sum += abs;
		}
	}

	return sum - (neg & 1 ? 2 * min : 0);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const matrix = [[1, -1], [-1, 1]];

	const $result = maxMatrixSum(matrix);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const matrix = [[1, 2, 3], [-1, -2, -3], [1, 2, 3]];

	const $result = maxMatrixSum(matrix);
	const $expect = 16;

	assertEquals($result, $expect);
});
