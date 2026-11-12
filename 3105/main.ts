function longestMonotonicSubarray(nums: number[]): number {
	let curLen = 1;
	let maxLen = 1;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i - 1] > nums[i]) {
			curLen = 2;

			while (nums[i] > nums[i + 1]) {
				curLen++;
				i++;
			}

			maxLen = Math.max(maxLen, curLen);
		}

		if (nums[i - 1] < nums[i]) {
			curLen = 2;

			while (nums[i] < nums[i + 1]) {
				curLen++;
				i++;
			}

			maxLen = Math.max(maxLen, curLen);
		}
	}

	return maxLen;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums: number[] = [1, 4, 3, 3, 2];

	const $result = longestMonotonicSubarray(nums);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums: number[] = [3, 3, 3, 3];

	const $result = longestMonotonicSubarray(nums);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums: number[] = [3, 2, 1];

	const $result = longestMonotonicSubarray(nums);
	const $expect = 3;

	assertEquals($result, $expect);
});
