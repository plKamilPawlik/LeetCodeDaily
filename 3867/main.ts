function gcd(x: number, y: number): number {
	return y === 0 ? x : gcd(y, x % y);
}

function gcdSum(nums: number[]): number {
	const prefixGcd = new Array<number>(nums.length);

	let gcdSum = 0;
	let maxNum = 0;

	for (let i = 0; i < prefixGcd.length; i++) {
		maxNum = Math.max(maxNum, nums[i]);
		prefixGcd[i] = gcd(nums[i], maxNum);
	}

	prefixGcd.sort((a, b) => a - b);

	for (let i = 0; i < Math.floor(nums.length / 2); i++) {
		gcdSum += gcd(prefixGcd[i], prefixGcd[prefixGcd.length - i - 1]);
	}

	return gcdSum;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [2, 6, 4];

	const $result = gcdSum(nums);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [3, 6, 2, 8];

	const $result = gcdSum(nums);
	const $expect = 5;

	assertEquals($result, $expect);
});
