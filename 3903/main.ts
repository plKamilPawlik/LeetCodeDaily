function firstStableIndex(nums: number[], k: number): number {
	const max = [...nums];
	const min = [...nums];

	for (let i = 1; i < nums.length; i++) {
		const j = nums.length - 1 - i;

		max[i] = Math.max(max[i], max[i - 1]);
		min[j] = Math.min(min[j], min[j + 1]);
	}

	for (let i = 0; i < nums.length; i++) {
		const score = max[i] - min[i];
		if (score <= k) return i;
	}

	return -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [5, 0, 1, 4], k = 3;

	const $result = firstStableIndex(nums, k);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [3, 2, 1], k = 1;

	const $result = firstStableIndex(nums, k);
	const $expect = -1;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [0], k = 0;

	const $result = firstStableIndex(nums, k);
	const $expect = 0;

	assertEquals($result, $expect);
});
