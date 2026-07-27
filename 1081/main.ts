function smallestSubsequence(s: string): string {
	const offset = "a".charCodeAt(0);

	const num: number[] = new Array(26).fill(0);
	const vis: number[] = new Array(26).fill(0);
	const stk: string[] = [];

	for (let i = 0; i < s.length; i++) {
		num[s.charCodeAt(i) - offset]++;
	}

	for (let i = 0; i < s.length; i++) {
		const idx = s.charCodeAt(i) - offset;
		num[idx]--;

		if (vis[idx]) continue;

		while (stk.length > 0 && stk[stk.length - 1] > s[i]) {
			const topIdx = stk[stk.length - 1].charCodeAt(0) - offset;

			if (num[topIdx] > 0) {
				vis[topIdx] = 0;
				stk.pop();
			} else break;
		}

		vis[idx] = 1;
		stk.push(s[i]);
	}

	return stk.join("");
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "bcabc";

	const $result = smallestSubsequence(s);
	const $expect = "abc";

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "cbacdcbc";

	const $result = smallestSubsequence(s);
	const $expect = "acdb";

	assertEquals($result, $expect);
});
