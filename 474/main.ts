function findMaxForm(strs: string[], m: number, n: number): number {
	const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
	const zip = (str: string): [number, number] => {
		const prefix: [number, number] = [0, 0];

		for (const char of str) {
			if (char === "0") prefix[0]++;
			if (char === "1") prefix[1]++;
		}

		return prefix;
	};

	for (const str of strs) {
		const [zeros, ones] = zip(str);

		for (let i = m; i >= zeros; i--) {
			for (let j = n; j >= ones; j--) {
				dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
			}
		}
	}

	return dp[m][n];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const strs = ["10", "0001", "111001", "1", "0"];
	const m = 5;
	const n = 3;

	const $result = findMaxForm(strs, m, n);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const strs = ["10", "0", "1"];
	const m = 1;
	const n = 1;

	const $result = findMaxForm(strs, m, n);
	const $expect = 2;

	assertEquals($result, $expect);
});
