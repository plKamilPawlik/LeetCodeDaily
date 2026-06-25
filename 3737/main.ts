function countMajoritySubarrays(nums: number[], target: number): number {
	const prefixSum = Array<number>(nums.length + 1);
	prefixSum[0] = 0;

	for (let i = 1; i < prefixSum.length; i++) {
		prefixSum[i] = prefixSum[i - 1] + Number(nums[i - 1] === target);
	}

	let total = 0;

	for (let i = 1; i < prefixSum.length; i++) {
		for (let j = i; j < prefixSum.length; j++) {
			const count = prefixSum[j] - prefixSum[i - 1];
			const length = j - i + 1;

			if (2 * count > length) total++;
		}
	}

	return total;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 2, 2, 3], target = 2;

	const $result = countMajoritySubarrays(nums, target);
	const $expect = 5;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 1, 1, 1], target = 1;

	const $result = countMajoritySubarrays(nums, target);
	const $expect = 10;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [1, 2, 3], target = 4;

	const $result = countMajoritySubarrays(nums, target);
	const $expect = 0;

	assertEquals($result, $expect);
});
