type Item = [value: number, index: number];

function maxValue(nums: number[]): number[] {
	const result = Array<number>(nums.length).fill(0);
	const prevMax = Array<Item>(nums.length);

	let acc: Item = [-Infinity, -1];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > acc[0]) acc = [nums[i], i];

		prevMax[i] = [...acc];
	}

	const process = (r: number, min: number, max: number) => {
		const [value, index] = prevMax[r];
		const currMax = value > min ? max : value;

		let nextMin = Math.min(value, min);

		for (let i = index; i <= r; i++) {
			nextMin = Math.min(nextMin, nums[i]);
			result[i] = currMax;
		}

		if (index) process(index - 1, nextMin, currMax);
	};

	process(nums.length - 1, Infinity, 0);

	return result;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [2, 1, 3];

	const $result = maxValue(nums);
	const $expect = [2, 2, 3];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [2, 3, 1];

	const $result = maxValue(nums);
	const $expect = [3, 3, 3];

	assertEquals($result, $expect);
});
