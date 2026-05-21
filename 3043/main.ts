function getAllPrefixes(num: number): number[] {
	const prefixes: number[] = [];

	while (num > 0) {
		prefixes.push(num);
		num = Math.floor(num / 10);
	}

	return prefixes;
}

function longestCommonPrefix(arr1: number[], arr2: number[]): number {
	const prefix1 = new Set(arr1.map(getAllPrefixes).flat());
	const prefix2 = new Set(arr2.map(getAllPrefixes).flat());
	let maxLength = 0;

	for (const prefix of prefix1) {
		if (prefix2.has(prefix)) {
			maxLength = Math.max(maxLength, prefix.toString().length);
		}
	}

	return maxLength;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const arr1 = [1, 10, 100], arr2 = [1000];

	const $result = longestCommonPrefix(arr1, arr2);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const arr1 = [1, 2, 3], arr2 = [4, 4, 4];

	const $result = longestCommonPrefix(arr1, arr2);
	const $expect = 0;

	assertEquals($result, $expect);
});
