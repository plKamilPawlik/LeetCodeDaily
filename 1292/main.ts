function maxSideLength(mat: number[][], threshold: number): number {
	const M = mat.length;
	const N = mat[0].length;

	const prefix = Array.from({ length: M + 1 }, () => Array<number>(N + 1).fill(0));
	const radius = Math.min(M, N);

	for (let m = 1; m <= M; m++) {
		for (let n = 1; n <= N; n++) {
			prefix[m][n] = mat[m - 1][n - 1] - prefix[m - 1][n - 1];
			prefix[m][n] += prefix[m - 1][n];
			prefix[m][n] += prefix[m][n - 1];
		}
	}

	const getRectValue = (m1: number, n1: number, m2: number, n2: number): number => {
		return prefix[m2][n2] - prefix[m1 - 1][n2] - prefix[m2][n1 - 1] +
			prefix[m1 - 1][n1 - 1];
	};

	let length = 0;

	for (let m = 1; m <= M; m++) {
		for (let n = 1; n <= N; n++) {
			for (let l = length + 1; l <= radius; l++) {
				if (m + l - 1 > M) break;
				if (n + l - 1 > N) break;

				if (getRectValue(m, n, m + l - 1, n + l - 1) <= threshold) {
					length = l;
				}
			}
		}
	}

	return length;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const mat = [
			[1, 1, 3, 2, 4, 3, 2],
			[1, 1, 3, 2, 4, 3, 2],
			[1, 1, 3, 2, 4, 3, 2],
		],
		threshold = 4;

	const $result = maxSideLength(mat, threshold);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const mat = [
			[2, 2, 2, 2, 2],
			[2, 2, 2, 2, 2],
			[2, 2, 2, 2, 2],
			[2, 2, 2, 2, 2],
			[2, 2, 2, 2, 2],
		],
		threshold = 1;

	const $result = maxSideLength(mat, threshold);
	const $expect = 0;

	assertEquals($result, $expect);
});
