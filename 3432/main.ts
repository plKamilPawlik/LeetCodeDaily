function countPartitions(nums: number[]): number {
	let p = nums.reduce((a, b) => a + b);
	let q = 0;

	let count = 0;

	for (let i = 0; i < nums.length - 1; i++) {
		p -= nums[i];
		q += nums[i];

		if (Math.abs(p - q) % 2 === 0) {
			count++;
		}
	}

	return count;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [10, 10, 3, 7, 6];

	const $result = countPartitions(nums);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 2, 2];

	const $result = countPartitions(nums);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [2, 4, 6, 8];

	const $result = countPartitions(nums);
	const $expect = 3;

	assertEquals($result, $expect);
});
