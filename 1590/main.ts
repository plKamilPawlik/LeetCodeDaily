function minSubarray(nums: number[], p: number): number {
	const mod = nums.reduce((prev, curr) => (prev + curr) % p, 0);

	if (mod === 0) return 0;

	const map = new Map<number, number>([[0, -1]]);

	let sum = 0;
	let len = nums.length;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		sum %= p;

		const dif = (sum - mod + p) % p;

		if (map.has(dif)) len = Math.min(len, i - map.get(dif)!);

		map.set(sum, i);
	}

	return len < nums.length ? len : -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const nums = [3, 1, 4, 2];
	const p = 6;

	const $result = minSubarray(nums, p);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const nums = [6, 3, 5, 2];
	const p = 9;

	const $result = minSubarray(nums, p);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const nums = [1, 2, 3];
	const p = 3;

	const $result = minSubarray(nums, p);
	const $expect = 0;

	assertEquals($result, $expect);
});
