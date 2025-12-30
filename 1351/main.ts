function countNegatives(grid: number[][]): number {
	function firstNegativeIndex(line: number[], startIndex = 0): number {
		let p = startIndex;
		let q = line.length - 1;

		while (p < q) {
			const mid = p + ((q - p) >> 1);

			if (line[mid] >= 0) {
				p = mid + 1;
			} else {
				q = mid;
			}
		}

		return line[p] >= 0 ? -1 : p;
	}

	let acc = 0;
	let idx = 0;

	for (let i = grid.length - 1; i >= 0; i--) {
		idx = firstNegativeIndex(grid[i], idx);

		if (idx < 0) {
			idx = 0;
		} else {
			acc += grid[i].length - idx;
		}
	}

	return acc;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]];

	const $result = countNegatives(grid);
	const $expect = 8;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [[3, 2], [1, 0]];

	const $result = countNegatives(grid);
	const $expect = 0;

	assertEquals($result, $expect);
});
