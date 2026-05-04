function rotateString(s: string, goal: string): boolean {
	return s.length === goal.length && s.repeat(2).includes(goal);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "abcde", goal = "cdeab";

	const $result = rotateString(s, goal);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "abcde", goal = "abced";

	const $result = rotateString(s, goal);
	const $expect = false;

	assertEquals($result, $expect);
});
