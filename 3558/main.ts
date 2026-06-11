function safe_pow(x: number, y: number): number {
	const MOD = BigInt(1e9 + 7);

	let ans = 1n;
	let base = BigInt(x);
	let exp = BigInt(y);

	while (exp) {
		if (exp & 1n) ans = (ans * base) % MOD;

		base = (base * base) % MOD;
		exp = exp >> 1n;
	}

	return Number(ans);
}

function assignEdgeWeights(edges: number[][]): number {
	const n = edges.length + 1;

	const graph = Array.from({ length: n + 1 }, () => new Array<number>());
	const visited = Array.from({ length: n + 1 }, () => false);
	visited[0] = true;
	visited[1] = true;

	for (const [u, v] of edges) {
		graph[u].push(v);
		graph[v].push(u);
	}

	const queue = [[1, 0]];
	let maxDepth = 0;

	while (queue.length) {
		const [node, depth] = queue.pop()!;

		maxDepth = Math.max(maxDepth, depth);

		for (const next of graph[node]) {
			if (visited[next]) continue;
			else visited[next] = true;

			queue.push([next, depth + 1]);
		}
	}

	return safe_pow(2, maxDepth - 1);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const edges = [[1, 2]];

	const $result = assignEdgeWeights(edges);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const edges = [[1, 2], [1, 3], [3, 4], [3, 5]];

	const $result = assignEdgeWeights(edges);
	const $expect = 2;

	assertEquals($result, $expect);
});
