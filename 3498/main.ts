function reverseDegree(s: string): number {
	const base = 1 + "z".charCodeAt(0);
	let degree = 0;

	for (let i = 1; i <= s.length; i++) {
		degree += i * (base - s.charCodeAt(i - 1));
	}

	return degree;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "abc";

	const $result = reverseDegree(s);
	const $expect = 148;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "zaza";

	const $result = reverseDegree(s);
	const $expect = 160;

	assertEquals($result, $expect);
});
