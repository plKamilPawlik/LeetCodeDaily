function minimumDeleteSum(s1: string, s2: string): number {
	const dp = new Array<number[]>(s1.length + 1);

	for (let i = 0; i <= s1.length; i++) {
		dp[i] = new Array<number>(s2.length + 1).fill(0);
	}

	for (let i = 0; i < s1.length; i++) {
		for (let j = 0; j < s2.length; j++) {
			if (s1[i] === s2[j]) {
				dp[i + 1][j + 1] = dp[i][j] + s1.charCodeAt(i);
			} else {
				dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
			}
		}
	}

	let acc = 0;

	for (const c of s1) acc += c.charCodeAt(0);
	for (const c of s2) acc += c.charCodeAt(0);

	return acc - 2 * dp[s1.length][s2.length];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s1 = "sea", s2 = "eat";

	const $result = minimumDeleteSum(s1, s2);
	const $expect = 231;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s1 = "delete", s2 = "leet";

	const $result = minimumDeleteSum(s1, s2);
	const $expect = 403;

	assertEquals($result, $expect);
});
