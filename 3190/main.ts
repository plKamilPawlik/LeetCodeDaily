function minimumOperations(nums: number[]): number {
	let operations = 0;

	for (const num of nums) {
		if (num % 3 !== 0) operations++;
	}

	return operations;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const nums = [1, 2, 3, 4];

	const $result = minimumOperations(nums);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const nums = [3, 6, 9];

	const $result = minimumOperations(nums);
	const $expect = 0;

	assertEquals($result, $expect);
});
