function numOfStrings(patterns: string[], word: string): number {
	let count = 0;

	for (const pattern of patterns) {
		if (word.includes(pattern)) count++;
	}

	return count;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const patterns = ["a", "abc", "bc", "d"], word = "abc";

	const $result = numOfStrings(patterns, word);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const patterns = ["a", "b", "c"], word = "aaaaabbbbb";

	const $result = numOfStrings(patterns, word);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const patterns = ["a", "a", "a"], word = "ab";

	const $result = numOfStrings(patterns, word);
	const $expect = 3;

	assertEquals($result, $expect);
});
