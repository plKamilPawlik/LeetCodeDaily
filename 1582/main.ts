function numSpecial(mat: number[][]): number {
	const M = mat.length;
	const N = mat[0].length;

	const ones_row = new Array<number>(M).fill(0);
	const ones_col = new Array<number>(N).fill(0);

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			ones_row[m] += mat[m][n];
		}
	}

	for (let n = 0; n < N; n++) {
		for (let m = 0; m < M; m++) {
			ones_col[n] += mat[m][n];
		}
	}

	let countSpecial = 0;

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			if (ones_row[m] !== 1) continue;
			if (ones_col[n] !== 1) continue;

			countSpecial += mat[m][n];
		}
	}

	return countSpecial;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const mat = [[1, 0, 0], [0, 0, 1], [1, 0, 0]];

	const $result = numSpecial(mat);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const mat = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

	const $result = numSpecial(mat);
	const $expect = 3;

	assertEquals($result, $expect);
});
