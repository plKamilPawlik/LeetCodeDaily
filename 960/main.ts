function minDeletionSize(strs: string[]): number {
	const len = strs[0].length;
	const dp = new Array<number>(len).fill(1);

	for (let i = len - 2; i >= 0; i--) {
		for (let j = i + 1; j < len; j++) {
			if (strs.every((str) => str.charCodeAt(i) <= str.charCodeAt(j))) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
	}

	return len - Math.max(...dp);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const strs = ["babca", "bbazb"];

	const $result = minDeletionSize(strs);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const strs = ["edcba"];

	const $result = minDeletionSize(strs);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const strs = ["ghi", "def", "abc"];

	const $result = minDeletionSize(strs);
	const $expect = 0;

	assertEquals($result, $expect);
});
