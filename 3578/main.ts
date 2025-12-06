function countPartitions(nums: number[], k: number): number {
	const parts = new Array<number>(nums.length + 1);
	const prefix = new Array<number>(nums.length + 1);

	parts[0] = 1;
	prefix[0] = 1;

	const max: number[] = [];
	const min: number[] = [];
	const modulo = 1e9 + 7;

	for (let i = 0, j = 0; i < nums.length; i++) {
		while (max.length && nums[max.at(-1)!] <= nums[i]) max.pop();
		while (min.length && nums[min.at(-1)!] >= nums[i]) min.pop();

		max.push(i);
		min.push(i);

		while (max.length && min.length && nums[max[0]] - nums[min[0]] > k) {
			if (max[0] === j) max.shift();
			if (min[0] === j) min.shift();

			j++;
		}

		parts[i + 1] = prefix[i] - (j ? prefix[j - 1] : 0);
		parts[i + 1] += modulo;
		parts[i + 1] %= modulo;

		prefix[i + 1] = (prefix[i] + parts[i + 1]) % modulo;
	}

	return parts.at(-1)!;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [9, 4, 1, 3, 7];
	const k = 4;

	const $result = countPartitions(nums, k);
	const $expect = 6;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [3, 3, 4];
	const k = 0;

	const $result = countPartitions(nums, k);
	const $expect = 2;

	assertEquals($result, $expect);
});
