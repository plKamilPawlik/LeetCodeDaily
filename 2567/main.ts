function minimizeSum(nums: number[]): number {
	const max = nums.slice(0, 3).sort((a, b) => b - a);
	const min = nums.slice(0, 3).sort((a, b) => a - b);

	for (let i = 3; i < nums.length; i++) {
		if (max[2] < nums[i]) max[2] = nums[i];
		if (max[1] < max[2]) [max[1], max[2]] = [max[2], max[1]];
		if (max[0] < max[1]) [max[0], max[1]] = [max[1], max[0]];

		if (min[2] > nums[i]) min[2] = nums[i];
		if (min[1] > min[2]) [min[1], min[2]] = [min[2], min[1]];
		if (min[0] > min[1]) [min[0], min[1]] = [min[1], min[0]];
	}

	return Math.min(max[0] - min[2], max[1] - min[1], max[2] - min[0]);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums: number[] = [1, 4, 7, 8, 5];

	const $result = minimizeSum(nums);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums: number[] = [1, 4, 3];

	const $result = minimizeSum(nums);
	const $expect = 0;

	assertEquals($result, $expect);
});
