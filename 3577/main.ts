function countPermutations(complexity: number[]): number {
	for (let i = 1; i < complexity.length; i++) {
		if (complexity[i] <= complexity[0]) return 0;
	}

	const factorial = (n: number, mod = 1e9 + 7): number => {
		if (n === 0) return n;
		if (n === 1) return n;

		return (n * factorial(n - 1)) % mod;
	};

	return factorial(complexity.length - 1);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const complexity = [1, 2, 3];

	const $result = countPermutations(complexity);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 1", () => {
	const complexity = [3, 3, 3, 4, 4, 4];

	const $result = countPermutations(complexity);
	const $expect = 0;

	assertEquals($result, $expect);
});
