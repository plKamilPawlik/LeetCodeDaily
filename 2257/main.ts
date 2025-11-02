const enum CELL {
	Empty,
	Guard,
	Guarded,
	Wall,
}

function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
	const grid = Array.from({ length: m }, () => new Array<number>(n).fill(CELL.Empty));

	for (const [x, y] of guards) grid[x][y] = CELL.Guard;
	for (const [x, y] of walls) grid[x][y] = CELL.Wall;

	const staysInBounds = (x: number, y: number): boolean => {
		if (x < 0 || x >= m) return false;
		if (y < 0 || y >= n) return false;

		return true;
	};

	const markAsGuarded = (x: number, y: number): void => {
		for (const [dx, dy] of [[-1, 0], [0, -1], [+1, 0], [0, +1]]) {
			let _x = x + dx;
			let _y = y + dy;

			while (staysInBounds(_x, _y)) {
				if (grid[_x][_y] === CELL.Empty) {
					grid[_x][_y] = CELL.Guarded;
				}

				if (grid[_x][_y] === CELL.Guarded) {
					_x += dx;
					_y += dy;
				} else break;
			}
		}
	};

	let countUnguardedCells = 0;

	for (let x = 0; x < m; x++) {
		for (let y = 0; y < n; y++) {
			if (grid[x][y] === CELL.Guard) markAsGuarded(x, y);
		}
	}

	for (let x = 0; x < m; x++) {
		for (let y = 0; y < n; y++) {
			if (grid[x][y] === CELL.Empty) countUnguardedCells++;
		}
	}

	return countUnguardedCells;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const m = 4;
	const n = 6;
	const guards = [[0, 0], [1, 1], [2, 3]];
	const walls = [[0, 1], [2, 2], [1, 4]];

	const $result = countUnguarded(m, n, guards, walls);
	const $expect = 7;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const m = 3;
	const n = 3;
	const guards = [[1, 1]];
	const walls = [[0, 1], [1, 0], [2, 1], [1, 2]];

	const $result = countUnguarded(m, n, guards, walls);
	const $expect = 4;

	assertEquals($result, $expect);
});
