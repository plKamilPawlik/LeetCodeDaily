function longestBalanced(nums: number[]): number {
	let maxLength = 0;

	for (let i = 0; i < nums.length - 1; i++) {
		const odd = new Set<number>();
		const even = new Set<number>();

		for (let j = i; j < nums.length; j++) {
			nums[j] & 1 ? odd.add(nums[j]) : even.add(nums[j]);

			if (odd.size === even.size) {
				maxLength = Math.max(maxLength, j - i + 1);
			}
		}
	}

	return maxLength;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [2, 5, 4, 3];

	const $result = longestBalanced(nums);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [3, 2, 2, 5, 4];

	const $result = longestBalanced(nums);
	const $expect = 5;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [1, 2, 3, 2];

	const $result = longestBalanced(nums);
	const $expect = 3;

	assertEquals($result, $expect);
});
