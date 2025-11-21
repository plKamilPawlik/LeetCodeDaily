function countPalindromicSubsequence(s: string): number {
	const availableLetters = new Set<string>(s);
	let uniquePalindromes = 0;

	for (const letter of availableLetters) {
		const p = s.indexOf(letter);
		const q = s.lastIndexOf(letter);

		const subset = new Set<string>();

		for (let i = p + 1; i < q; i++) {
			subset.add(s[i]);
		}

		uniquePalindromes += subset.size;
	}

	return uniquePalindromes;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const s = "aabca";

	const $result = countPalindromicSubsequence(s);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const s = "adc";

	const $result = countPalindromicSubsequence(s);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const s = "bbcbaba";

	const $result = countPalindromicSubsequence(s);
	const $expect = 4;

	assertEquals($result, $expect);
});
