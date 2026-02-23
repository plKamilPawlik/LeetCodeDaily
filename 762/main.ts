const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19];

function countPrimeSetBits(left: number, right: number): number {
	const bitCount = (n: number): number => {
		let count = n & 1;

		while ((n >>= 1)) if (n & 1) count++;

		return count;
	};

	let ans = 0;

	for (let n = left; n <= right; n++) {
		if (PRIMES.includes(bitCount(n))) ans++;
	}

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const left = 6, right = 10;

	const $result = countPrimeSetBits(left, right);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const left = 10, right = 15;

	const $result = countPrimeSetBits(left, right);
	const $expect = 5;

	assertEquals($result, $expect);
});
