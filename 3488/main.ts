function getIndexOf(elem: number, arr: number[]): number {
	let p = 0, q = arr.length;

	while (p < q) {
		const mid = (p + q) >> 1;

		if (arr[mid] < elem) {
			p = mid + 1;
		} else {
			q = mid;
		}
	}

	return p;
}

function solveQueries(nums: number[], queries: number[]): number[] {
	const numsPos = new Map<number, number[]>();

	for (let i = 0; i < nums.length; i++) {
		if (numsPos.has(nums[i])) {
			numsPos.get(nums[i])!.push(i);
		} else {
			numsPos.set(nums[i], [i]);
		}
	}

	for (const [_, pos] of numsPos) {
		const tail = pos.at(-1)!;
		const head = pos.at(0)!;

		pos.unshift(tail - nums.length);
		pos.push(head + nums.length);
	}

	for (let i = 0; i < queries.length; i++) {
		const num = nums[queries[i]];
		const pos = numsPos.get(num)!;

		if (pos?.length === 3) {
			queries[i] = -1;
		} else {
			const idx = getIndexOf(queries[i], pos);
			queries[i] = Math.min(
				pos[idx + 1] - pos[idx],
				pos[idx] - pos[idx - 1],
			);
		}
	}

	return queries;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 3, 1, 4, 1, 3, 2], queries = [0, 3, 5];

	const $result = solveQueries(nums, queries);
	const $expect = [2, -1, 3];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 2, 3, 4], queries = [0, 1, 2, 3];

	const $result = solveQueries(nums, queries);
	const $expect = [-1, -1, -1, -1];

	assertEquals($result, $expect);
});
