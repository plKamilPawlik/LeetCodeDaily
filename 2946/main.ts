function areSimilar(mat: number[][], k: number): boolean {
	const M = mat.length;
	const N = mat[0].length;

	const offset = k % N;
	const cyclic = mat.map((row) => {
		const p = row.slice(0, offset);
		const q = row.slice(offset);

		return q.concat(p);
	});

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			if (mat[m][n] !== cyclic[m][n]) return false;
		}
	}

	return true;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k = 4;

	const $result = areSimilar(mat, k);
	const $expect = false;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const mat = [[1, 2, 1, 2], [5, 5, 5, 5], [6, 3, 6, 3]], k = 2;

	const $result = areSimilar(mat, k);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const mat = [[2, 2], [2, 2]], k = 3;

	const $result = areSimilar(mat, k);
	const $expect = true;

	assertEquals($result, $expect);
});
