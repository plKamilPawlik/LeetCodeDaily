function minOperations(nums: number[]): number {
	const GDC = (a: number, b: number): number => {
		if (a < b) [a, b] = [b, a];

		const q = Math.floor(a / b);
		const r = a - (q * b);

		if (r === 0) return b;
		else return GDC(b, r);
	};

	let ones = 0;
	let gdc = nums[0];

	for (const num of nums) {
		if (num === 1) ones++;

		gdc = GDC(gdc, num);
	}

	if (ones > 0) return nums.length - ones;
	if (gdc > 1) return -1;

	let len = nums.length;

	for (let i = 0; i < nums.length - 1; i++) {
		gdc = nums[i];

		for (let j = i + 1; j < nums.length; j++) {
			gdc = GDC(gdc, nums[j]);

			if (gdc > 1) continue;

			len = Math.min(len, j - i + 1);
			break;
		}
	}

	return len + nums.length - 2;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const nums = [2, 6, 3, 4];

	const $result = minOperations(nums);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const nums = [2, 10, 6, 14];

	const $result = minOperations(nums);
	const $expect = -1;

	assertEquals($result, $expect);
});
