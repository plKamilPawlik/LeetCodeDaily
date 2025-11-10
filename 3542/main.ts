function minOperations(nums: number[]): number {
	const stack: number[] = [];
	let numOperations = 0;

	for (const num of nums) {
		while (stack.length && stack.at(-1)! > num) {
			stack.pop();
		}

		if (num === 0) continue;

		if (stack.length === 0 || stack.at(-1)! < num) {
			stack.push(num);
			numOperations++;
		}
	}

	return numOperations;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const nums = [0, 2];

	const $result = minOperations(nums);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const nums = [3, 1, 2, 1];

	const $result = minOperations(nums);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const nums = [1, 2, 1, 2, 1, 2];

	const $result = minOperations(nums);
	const $expect = 4;

	assertEquals($result, $expect);
});
