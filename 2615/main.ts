function distance(nums: number[]): number[] {
	const groups = new Map<number, number[]>();

	for (let i = 0; i < nums.length; i++) {
		if (groups.has(nums[i])) {
			groups.get(nums[i])!.push(i);
		} else {
			groups.set(nums[i], [i]);
		}
	}

	for (const group of groups.values()) {
		const sum = group.reduce((prev, curr) => prev + curr, 0);
		let prefixSum = 0;

		for (let i = 0; i < group.length; i++) {
			const index = group[i];
			const delta = group[i] * (2 * i - group.length);

			nums[index] = sum + delta - 2 * prefixSum;
			prefixSum += index;
		}
	}

	return nums;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 3, 1, 1, 2];

	const $result = distance(nums);
	const $expect = [5, 0, 3, 4, 0];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [0, 5, 3];

	const $result = distance(nums);
	const $expect = [0, 0, 0];

	assertEquals($result, $expect);
});
