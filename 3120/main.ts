function numberOfSpecialChars(word: string): number {
	const uppercase = new Set<string>();
	const lowercase = new Set<string>();
	const code_A = "A".charCodeAt(0);
	const code_Z = "Z".charCodeAt(0);
	const code_a = "a".charCodeAt(0);
	const code_z = "z".charCodeAt(0);

	for (const char of word) {
		const code = char.charCodeAt(0);

		if (code >= code_A && code <= code_Z) uppercase.add(char);
		if (code >= code_a && code <= code_z) lowercase.add(char);
	}

	let count = 0;

	for (const char of uppercase) {
		if (lowercase.has(char.toLowerCase())) count++;
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
	const word = "abBCab";

	const $result = numberOfSpecialChars(word);
	const $expect = 1;

	assertEquals($result, $expect);
});
