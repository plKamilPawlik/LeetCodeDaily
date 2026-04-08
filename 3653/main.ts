function xorAfterQueries(nums: number[], queries: number[][]): number {
	for (const [l, r, k, v] of queries) {
		let idx = l;

		while (idx <= r) {
			nums[idx] = (nums[idx] * v) % (1e9 + 7);
			idx += k;
		}
	}

	let xor = nums[0];

	for (let i = 1; i < nums.length; i++) {
		xor ^= nums[i];
	}

	return xor;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 1, 1], queries = [[0, 2, 1, 4]];

	const $result = xorAfterQueries(nums, queries);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [2, 3, 1, 5, 4], queries = [[1, 4, 2, 3], [0, 2, 1, 2]];

	const $result = xorAfterQueries(nums, queries);
	const $expect = 31;

	assertEquals($result, $expect);
});
