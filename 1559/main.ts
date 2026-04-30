function containsCycle(grid: string[][]): boolean {
	const M = grid.length;
	const N = grid[0].length;

	const visited = Array.from({ length: M }, () => Array<boolean>(N).fill(false));

	function dfs(curr: [m: number, n: number], prev: [m: number, n: number]): boolean {
		const [curr_m, curr_n] = curr;
		const [prev_m, prev_n] = prev;

		visited[curr_m][curr_n] = true;

		const dirs = [[-1, 0], [0, -1], [+1, 0], [0, +1]];

		for (const [dm, dn] of dirs) {
			const next_m = curr_m + dm;
			const next_n = curr_n + dn;

			if (next_m === prev_m && next_n === prev_n) continue;
			if (next_m < 0 || next_m >= M) continue;
			if (next_n < 0 || next_n >= N) continue;

			if (grid[next_m][next_n] === grid[curr_m][curr_n]) {
				if (visited[next_m][next_n]) return true;
				if (dfs([next_m, next_n], curr)) return true;
			}
		}

		return false;
	}

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			if (!visited[m][n] && dfs([m, n], [-1, -1])) return true;
		}
	}

	return false;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [
		["a", "a", "a", "a"],
		["a", "b", "b", "a"],
		["a", "b", "b", "a"],
		["a", "a", "a", "a"],
	];

	const $result = containsCycle(grid);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [
		["c", "c", "c", "a"],
		["c", "d", "c", "c"],
		["c", "c", "e", "c"],
		["f", "c", "c", "c"],
	];

	const $result = containsCycle(grid);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const grid = [
		["a", "b", "b"],
		["b", "z", "b"],
		["b", "b", "a"],
	];

	const $result = containsCycle(grid);
	const $expect = false;

	assertEquals($result, $expect);
});
