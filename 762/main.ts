function countPrimeSetBits(left: number, right: number): number {
	const isPrime = (n: number): boolean => {
		if (n < 2) return false;

		const sqrt = Math.sqrt(n);

		for (let i = 2; i <= sqrt; i++) {
			if (n % i === 0) return false;
		}

		return true;
	};

	const numBits = (n: number): number => {
		let count = n & 1;

		while ((n >>= 1)) if (n & 1) count++;

		return count;
	};

	let ans = 0;

	for (let int = left; int <= right; int++) {
		const bits = numBits(int);
		if (isPrime(bits)) ans++;
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
