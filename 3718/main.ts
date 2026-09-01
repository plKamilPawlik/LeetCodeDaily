function missingMultiple(nums: number[], k: number): number {
	nums.sort((a, b) => a - b);

	let m = k;

	for (const num of nums) {
		if (num < m) continue;
		if (num % k) continue;
		if (num > m) break;

		m += k;
	}

	return m;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [8, 2, 3, 4, 6], k = 2;

	const $result = missingMultiple(nums, k);
	const $expect = 10;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 4, 7, 10, 15], k = 5;

	const $result = missingMultiple(nums, k);
	const $expect = 5;

	assertEquals($result, $expect);
});
