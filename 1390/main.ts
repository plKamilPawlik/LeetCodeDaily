function sumFourDivisors(nums: number[]): number {
	const memo = new Map<number, number[]>();
	const getDivisors = (num: number): number[] => {
		if (memo.has(num)) return memo.get(num)!;

		const divisors: number[] = [];

		for (let i = 2; i ** 2 <= num; i++) {
			if (num % i !== 0) continue;

			if (num / i !== i) {
				divisors.push(i, num / i);
			} else {
				divisors.push(i);
			}
		}

		return divisors;
	};

	let sum = 0;

	for (const num of nums) {
		const divisors = getDivisors(num);

		if (divisors.length === 2) {
			sum += 1 + divisors[0] + divisors[1] + num;
		}
	}

	return sum;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [21, 4, 7];

	const $result = sumFourDivisors(nums);
	const $expect = 32;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [21, 21];

	const $result = sumFourDivisors(nums);
	const $expect = 64;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [1, 2, 3, 4, 5];

	const $result = sumFourDivisors(nums);
	const $expect = 0;

	assertEquals($result, $expect);
});
