function numSpecial(mat: number[][]): number {
	const M = mat.length;
	const N = mat[0].length;

	const isSpecialCol = (n: number): boolean => {
		let countOnes = 0;

		for (let m = 0; m < M && countOnes < 2; m++) {
			if (mat[m][n] === 1) countOnes++;
		}

		return countOnes === 1;
	};

	const isSpecialRow = (m: number): boolean => {
		let countOnes = 0;

		for (let n = 0; n < N && countOnes < 2; n++) {
			if (mat[m][n] === 1) countOnes++;
		}

		return countOnes === 1;
	};

	let countSpecials = 0;

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			if (!isSpecialCol(n)) continue;
			if (!isSpecialRow(m)) continue;

			countSpecials += mat[m][n];
		}
	}

	return countSpecials;
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
