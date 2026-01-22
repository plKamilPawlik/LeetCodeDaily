function minimumPairRemoval(nums: number[]): number {
	const isNonDecreasing = (nums: number[]): boolean => {
		for (let i = 0; i < nums.length - 1; i++) {
			if (nums[i + 1] < nums[i]) return false;
		}

		return true;
	};

	const startLength = nums.length;

	while (!isNonDecreasing(nums)) {
		let minPairIndex = 0;
		let minPairValue = Infinity;

		for (let i = 0; i < nums.length - 1; i++) {
			if (minPairValue > nums[i] + nums[i + 1]) {
				minPairValue = nums[i] + nums[i + 1];
				minPairIndex = i;
			}
		}

		nums.splice(minPairIndex, 2, minPairValue);
	}

	return startLength - nums.length;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [5, 2, 3, 1];

	const $result = minimumPairRemoval(nums);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 2, 2];

	const $result = minimumPairRemoval(nums);
	const $expect = 0;

	assertEquals($result, $expect);
});
