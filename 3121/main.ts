function numberOfSpecialChars(word: string): number {
	const firstIndexOf = new Map<string, number>();
	const lastIndexOf = new Map<string, number>();

	for (let i = 0; i < word.length; i++) {
		lastIndexOf.set(word[i], i);

		if (firstIndexOf.has(word[i])) continue;
		else firstIndexOf.set(word[i], i);
	}

	const code_A = "A".charCodeAt(0);
	const code_Z = "Z".charCodeAt(0);
	let count = 0;

	for (const char of firstIndexOf.keys()) {
		const code = char.charCodeAt(0);

		if (code >= code_A && code <= code_Z) continue;

		const upper = char.toUpperCase();
		const idx_1 = firstIndexOf.get(upper)!;
		const idx_2 = lastIndexOf.get(char)!;

		if (idx_2 < idx_1) count++;
	}

	return count;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const word = "aaAbcBC";

	const $result = numberOfSpecialChars(word);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const word = "abc";

	const $result = numberOfSpecialChars(word);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const word = "AbBCab";

	const $result = numberOfSpecialChars(word);
	const $expect = 0;

	assertEquals($result, $expect);
});
