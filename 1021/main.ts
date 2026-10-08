function removeOuterParentheses(s: string): string {
	let ans = "";

	for (let i = 0; i < s.length; i++) {
		let count_p = 0;
		let count_q = 0;
		let j = i;

		while (j < s.length) {
			if (s[j] === "(") count_p++;
			if (s[j] === ")") count_q++;

			if (count_p === count_q) break;
			else j++;
		}

		ans += s.slice(i + 1, j);
		i = j;
	}

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "(()())(())";

	const $result = removeOuterParentheses(s);
	const $expect = "()()()";

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "(()())(())(()(()))";

	const $result = removeOuterParentheses(s);
	const $expect = "()()()()(())";

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const s = "()()";

	const $result = removeOuterParentheses(s);
	const $expect = "";

	assertEquals($result, $expect);
});
