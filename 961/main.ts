function repeatedNTimes(nums: number[]): number {
	const set = new Set<number>();

	for (const num of nums) {
		if (set.has(num)) return num;
		else set.add(num);
	}

	return NaN;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 2, 3, 3];

	const $result = repeatedNTimes(nums);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [2, 1, 2, 5, 3, 2];

	const $result = repeatedNTimes(nums);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [5, 1, 5, 2, 5, 3, 5, 4];

	const $result = repeatedNTimes(nums);
	const $expect = 5;

	assertEquals($result, $expect);
});
