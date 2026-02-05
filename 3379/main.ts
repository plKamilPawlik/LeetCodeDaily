function constructTransformedArray(nums: number[]): number[] {
	return nums.map((v, i) => {
		const abs = Math.abs(v) % nums.length;

		if (v > 0) return nums.at((i + abs) % nums.length)!;
		if (v < 0) return nums.at((i - abs) % nums.length)!;

		return v;
	});
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [3, -2, 1, 1];

	const $result = constructTransformedArray(nums);
	const $expect = [1, 1, 1, 3];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [-1, 4, -1];

	const $result = constructTransformedArray(nums);
	const $expect = [-1, -1, 4];

	assertEquals($result, $expect);
});
