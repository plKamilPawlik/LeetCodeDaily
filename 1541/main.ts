function minInsertions(s: string): number {
	let countInsertions = 0;
	let leftParentheses = 0;

	for (let i = 0; i < s.length; i++) {
		const c = s[i];

		if (c === "(") leftParentheses++;

		if (c === ")") {
			if (leftParentheses > 0) {
				leftParentheses--;
			} else countInsertions++;

			if (s[i + 1] === ")") i++;
			else countInsertions++;
		}
	}

	return countInsertions + leftParentheses * 2;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "(()))";

	const $result = minInsertions(s);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "())";

	const $result = minInsertions(s);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const s = "))())(";

	const $result = minInsertions(s);
	const $expect = 3;

	assertEquals($result, $expect);
});
