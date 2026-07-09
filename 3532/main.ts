function pathExistenceQueries(
	n: number,
	nums: number[],
	maxDiff: number,
	queries: number[][],
): boolean[] {
	const chain = Array<number>(n).fill(0);
	let chainID = 0;

	for (let i = 1; i < n; i++) {
		if (nums[i] - nums[i - 1] > maxDiff) chainID++;
		chain[i] = chainID;
	}

	return queries.map(([u, v]) => {
		return chain[u] === chain[v];
	});
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 2, nums = [1, 3], maxDiff = 1, queries = [[0, 0], [0, 1]];

	const $result = pathExistenceQueries(n, nums, maxDiff, queries);
	const $expect = [true, false];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 4, nums = [2, 5, 6, 8], maxDiff = 2, queries = [[0, 1], [0, 2], [1, 3], [2, 3]];

	const $result = pathExistenceQueries(n, nums, maxDiff, queries);
	const $expect = [false, false, true, true];

	assertEquals($result, $expect);
});
