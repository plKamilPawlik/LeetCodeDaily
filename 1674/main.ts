function minMoves(nums: number[], limit: number): number {
	const diff = Array<number>(2 * limit + 2).fill(0);

	for (let i = 0; i < nums.length / 2; i++) {
		const min = Math.min(nums[i], nums[nums.length - i - 1]);
		const max = Math.max(nums[i], nums[nums.length - i - 1]);

		diff[2] += 2;
		diff[min + 1] -= 1;
		diff[min + max] -= 1;
		diff[min + max + 1] += 1;
		diff[max + limit + 1] += 1;
	}

	let acc = 0;
	let ans = nums.length;

	for (let i = 2; i <= 2 * limit; i++) {
		acc += diff[i];
		ans = Math.min(acc, ans);
	}

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 2, 4, 3], limit = 4;

	const $result = minMoves(nums, limit);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 2, 2, 1], limit = 2;

	const $result = minMoves(nums, limit);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [1, 2, 1, 2], limit = 2;

	const $result = minMoves(nums, limit);
	const $expect = 0;

	assertEquals($result, $expect);
});
