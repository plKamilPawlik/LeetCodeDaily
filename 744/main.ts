function nextGreatestLetter(letters: string[], target: string): string {
	let code = Infinity;

	for (const letter of letters) {
		if (letter.charCodeAt(0) > target.charCodeAt(0)) {
			code = Math.min(code, letter.charCodeAt(0));
		}
	}

	if (code < Infinity) return String.fromCharCode(code);
	else return letters[0];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const letters = ["c", "f", "j"], target = "a";

	const $result = nextGreatestLetter(letters, target);
	const $expect = "c";

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const letters = ["c", "f", "j"], target = "c";

	const $result = nextGreatestLetter(letters, target);
	const $expect = "f";

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const letters = ["x", "x", "y", "y"], target = "z";

	const $result = nextGreatestLetter(letters, target);
	const $expect = "x";

	assertEquals($result, $expect);
});
