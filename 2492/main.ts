function minScore(n: number, roads: number[][]): number {
	const graph: [number, number][][] = Array.from({ length: n + 1 }, () => []);
	const visited: boolean[] = Array.from({ length: n + 1 }, () => false);

	for (const [u, v, d] of roads) {
		graph[u].push([v, d]);
		graph[v].push([u, d]);
	}

	let minScore = Infinity;

	(function dfs(u: number): void {
		if (visited[u]) return;
		else visited[u] = true;

		for (const [v, d] of graph[u]) {
			minScore = Math.min(minScore, d);
			if (!visited[v]) dfs(v);
		}
	})(1);

	return minScore;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 4, roads = [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]];

	const $result = minScore(n, roads);
	const $expect = 5;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 4, roads = [[1, 2, 2], [1, 3, 4], [3, 4, 7]];

	const $result = minScore(n, roads);
	const $expect = 2;

	assertEquals($result, $expect);
});
