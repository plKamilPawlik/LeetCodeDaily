function findXSum(nums: number[], k: number, x: number): number[] {
	const result = new Array<number>(nums.length - k);

	for (let i = 0; i <= nums.length - k; i++) {
		const freq = new Map<number, number>();

		for (let j = i; j < i + k; j++) {
			freq.set(nums[j], 1 + (freq.get(nums[j]) || 0));
		}

		const entries = Array.from(freq.entries()).sort((a, b) => {
			const [a_num, a_freq] = a;
			const [b_num, b_freq] = b;

			return a_freq !== b_freq ? b_freq - a_freq : b_num - a_num;
		}).slice(0, x);

		result[i] = entries.reduce((acc, [num, freq]) => acc + (num * freq), 0);
	}

	return result;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const nums = [1, 1, 2, 2, 3, 4, 2, 3];
	const k = 6;
	const x = 2;

	const $result = findXSum(nums, k, x);
	const $expect = [6, 10, 12];

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const nums = [3, 8, 7, 8, 7, 5];
	const k = 2;
	const x = 2;

	const $result = findXSum(nums, k, x);
	const $expect = [11, 15, 15, 15, 12];

	assertEquals($result, $expect);
});
