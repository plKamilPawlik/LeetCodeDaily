function minBitwiseArray(nums: number[]): number[] {
	return nums.map((num) => {
		for (let i = 0; i < 1000; i++) {
			if ((i | (i + 1)) === num) {
				return i;
			}
		}

		return -1;
	});
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [2, 3, 5, 7];

	const $result = minBitwiseArray(nums);
	const $expect = [-1, 1, 4, 3];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [11, 13, 31];

	const $result = minBitwiseArray(nums);
	const $expect = [9, 12, 15];

	assertEquals($result, $expect);
});
