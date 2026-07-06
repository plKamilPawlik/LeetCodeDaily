function findSafeWalk(grid: number[][], health: number): boolean {
	const M = grid.length;
	const N = grid[0].length;

	const dirs = [[-1, 0], [0, -1], [+1, 0], [0, +1]];
	const dist = Array.from({ length: M }, () => Array(N).fill(Infinity));
	dist[0][0] = grid[0][0];

	const queue = <[m: number, n: number][]> [[0, 0]];

	for (let ptr = 0; ptr < queue.length;) {
		const [m, n] = queue[ptr++];

		for (const [dm, dn] of dirs) {
			const _m = m + dm;
			const _n = n + dn;

			if (_m < 0 || _m >= M) continue;
			if (_n < 0 || _n >= N) continue;

			const cost = dist[m][n] + grid[_m][_n];

			if (dist[_m][_n] > cost) {
				dist[_m][_n] = cost;

				if (grid[_m][_n]) {
					queue.push([_m, _n]);
				} else {
					queue.splice(ptr, 0, [_m, _n]);
				}
			}
		}
	}

	return dist[M - 1][N - 1] < health;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [
			[0, 1, 0, 0, 0],
			[0, 1, 0, 1, 0],
			[0, 0, 0, 1, 0],
		],
		health = 1;

	const $result = findSafeWalk(grid, health);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [
			[0, 1, 1, 0, 0, 0],
			[1, 0, 1, 0, 0, 0],
			[0, 1, 1, 1, 0, 1],
			[0, 0, 1, 0, 1, 0],
		],
		health = 3;

	const $result = findSafeWalk(grid, health);
	const $expect = false;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const grid = [
			[1, 1, 1],
			[1, 0, 1],
			[1, 1, 1],
		],
		health = 5;

	const $result = findSafeWalk(grid, health);
	const $expect = true;

	assertEquals($result, $expect);
});
