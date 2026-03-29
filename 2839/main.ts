function canBeEqual(s1: string, s2: string): boolean {
	const [a, b, c, d] = [...s2];

	if (s1 === [c, b, a, d].join("")) return true;
	if (s1 === [c, d, a, b].join("")) return true;
	if (s1 === [a, d, c, b].join("")) return true;

	return s1 === s2;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s1 = "abcd", s2 = "cdab";

	const $result = canBeEqual(s1, s2);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s1 = "abcd", s2 = "dacb";

	const $result = canBeEqual(s1, s2);
	const $expect = false;

	assertEquals($result, $expect);
});
