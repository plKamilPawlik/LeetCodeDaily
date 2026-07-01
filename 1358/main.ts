function numberOfSubstrings(s: string): number {
	const lastIndex = [-1, -1, -1];
	const offset = "a".charCodeAt(0);

	let count = 0;

	for (let i = 0; i < s.length; i++) {
		const charIdx = s.charCodeAt(i) - offset;
		lastIndex[charIdx] = i;

		count += 1 + Math.min(
			lastIndex[0],
			lastIndex[1],
			lastIndex[2],
		);
	}

	return count;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "abcabc";

	const $result = numberOfSubstrings(s);
	const $expect = 10;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "aaacb";

	const $result = numberOfSubstrings(s);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const s = "abc";

	const $result = numberOfSubstrings(s);
	const $expect = 1;

	assertEquals($result, $expect);
});
