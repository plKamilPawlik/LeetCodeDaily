function shiftGrid(grid: number[][], k: number): number[][] {
	const M = grid.length;
	const N = grid[0].length;

	const list = grid.flat();
	const tail = list.splice(list.length - (k % list.length));
	const vect = tail.concat(list);

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			grid[m][n] = vect[N * m + n];
		}
	}

	return grid;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k = 1;

	const $result = shiftGrid(grid, k);
	const $expect = [[9, 1, 2], [3, 4, 5], [6, 7, 8]];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], k = 4;

	const $result = shiftGrid(grid, k);
	const $expect = [[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]];

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], k = 9;

	const $result = shiftGrid(grid, k);
	const $expect = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

	assertEquals($result, $expect);
});
