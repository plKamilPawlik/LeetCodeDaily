function checkStrings(s1: string, s2: string): boolean {
	if (s1.length !== s2.length) return false;

	const chars = new Int32Array(0xff);

	for (let i = 0; i < s1.length; i++) {
		const offset = (i & 1) << 7;
		chars[offset + s1.charCodeAt(i)]++;
		chars[offset + s2.charCodeAt(i)]--;
	}

	return chars.every((count) => count === 0);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s1 = "abcdba", s2 = "cabdab";

	const $result = checkStrings(s1, s2);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s1 = "abe", s2 = "bea";

	const $result = checkStrings(s1, s2);
	const $expect = false;

	assertEquals($result, $expect);
});
