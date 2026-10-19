function sumCounts(nums: number[]): number {
	let sum = 0;

	for (let p = 0; p < nums.length; p++) {
		const distinct = new Set<number>();

		for (let q = p; q < nums.length; q++) {
			distinct.add(nums[q]);
			sum += distinct.size ** 2;
		}
	}

	return sum;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 2, 1];

	const $result = sumCounts(nums);
	const $expect = 15;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 1];

	const $result = sumCounts(nums);
	const $expect = 3;

	assertEquals($result, $expect);
});
