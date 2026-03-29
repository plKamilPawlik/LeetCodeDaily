function canBeEqual(s1: string, s2: string): boolean {
	let pass_0_2 = false;
	let pass_1_3 = false;

	if (s1[0] === s2[0] && s1[2] === s2[2]) pass_0_2 = true;
	if (s1[0] === s2[2] && s1[2] === s2[0]) pass_0_2 = true;
	if (s1[1] === s2[1] && s1[3] === s2[3]) pass_1_3 = true;
	if (s1[1] === s2[3] && s1[3] === s2[1]) pass_1_3 = true;

	return pass_0_2 && pass_1_3;
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
