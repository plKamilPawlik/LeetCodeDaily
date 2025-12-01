function minOperations(nums: number[], k: number): number {
	const sum = nums.reduce((prev, curr) => prev + curr, 0);

	return sum % k;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const nums = [3, 9, 7];
	const k = 5;

	const $result = minOperations(nums, k);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const nums = [4, 1, 3];
	const k = 4;

	const $result = minOperations(nums, k);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const nums = [3, 2];
	const k = 6;

	const $result = minOperations(nums, k);
	const $expect = 5;

	assertEquals($result, $expect);
});
