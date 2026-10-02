function generateParenthesis(n: number): string[] {
	const acc: string[] = [];
	const ans: string[] = [];

	(function dfs(p: number, q: number): void {
		if (p === 0 && q === 0) {
			return void ans.push(acc.join(""));
		}

		if (p > 0) {
			acc.push("(");
			dfs(p - 1, q);
			acc.pop();
		}

		if (q > p) {
			acc.push(")");
			dfs(p, q - 1);
			acc.pop();
		}
	})(n, n);

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 3;

	const $result = generateParenthesis(n);
	const $expect = ["((()))", "(()())", "(())()", "()(())", "()()()"];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 1;

	const $result = generateParenthesis(n);
	const $expect = ["()"];

	assertEquals($result, $expect);
});
