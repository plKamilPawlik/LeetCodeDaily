function rotateGrid(grid: number[][], k: number): number[][] {
	const m = grid.length;
	const n = grid[0].length;
	const l = Math.min(m, n);

	for (let i = 0; i < l / 2; i++) {
		let loop: number[] = [];
		let x: number = i;
		let y: number = i;

		/* Step 1 - create loop
        /*   *   *   *   *   *   *   *   */

		// down
		while (y < m - i) loop.push(grid[y++][x]);

		y--;
		x++;

		// right
		while (x < n - i) loop.push(grid[y][x++]);

		y--;
		x--;

		// up
		while (y > i - 1) loop.push(grid[y--][x]);

		y++;
		x--;

		// left
		while (x > i) loop.push(grid[y][x--]);

		/* Step 2 - shift values
        /*   *   *   *   *   *   *   *   */

		const shift = loop.length - (k % loop.length);
		loop = [...loop.slice(shift), ...loop.slice(0, shift)];

		/* Step 3 - reasign values
        /*   *   *   *   *   *   *   *   */

		x = i;
		y = i;

		// down
		while (y < m - i) grid[y++][x] = loop.shift()!;

		y--;
		x++;

		// right
		while (x < n - i) grid[y][x++] = loop.shift()!;

		y--;
		x--;

		// up
		while (y > i - 1) grid[y--][x] = loop.shift()!;

		y++;
		x--;

		// left
		while (x > i) grid[y][x--] = loop.shift()!;
	}

	return grid;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [[40, 10], [30, 20]], k = 1;

	const $result = rotateGrid(grid, k);
	const $expect = [[10, 20], [40, 30]];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], k = 2;

	const $result = rotateGrid(grid, k);
	const $expect = [[3, 4, 8, 12], [2, 11, 10, 16], [1, 7, 6, 15], [5, 9, 13, 14]];

	assertEquals($result, $expect);
});
