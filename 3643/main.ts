function reverseSubmatrix(grid: number[][], x: number, y: number, k: number): number[][] {
	for (let i = 0; i < (k >> 1); i++) {
		const x1 = x + i;
		const x2 = x + k - i - 1;

		for (let j = y; j < y + k; j++) {
			[grid[x1][j], grid[x2][j]] = [grid[x2][j], grid[x1][j]];
		}
	}

	return grid;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
	const x = 1, y = 0, k = 3;

	const $result = reverseSubmatrix(grid, x, y, k);
	const $expect = [[1, 2, 3, 4], [13, 14, 15, 8], [9, 10, 11, 12], [5, 6, 7, 16]];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [[3, 4, 2, 3], [2, 3, 4, 2]], x = 0, y = 2, k = 2;

	const $result = reverseSubmatrix(grid, x, y, k);
	const $expect = [[3, 4, 4, 2], [2, 3, 2, 3]];

	assertEquals($result, $expect);
});
