function numberOfStableArrays(zero: number, one: number, limit: number): number {
	const modulo = 1e9 + 7;

	const dp: number[][][] = Array.from(
		{ length: zero + 1 },
		() => Array.from({ length: one + 1 }, () => [0, 0]),
	);

	for (let i = 0; i <= Math.min(zero, limit); i++) {
		dp[i][0][0] = 1;
	}

	for (let j = 0; j <= Math.min(one, limit); j++) {
		dp[0][j][1] = 1;
	}

	for (let i = 1; i <= zero; i++) {
		for (let j = 1; j <= one; j++) {
			dp[i][j][0] = dp[i - 1][j][0] + dp[i - 1][j][1];
			dp[i][j][1] = dp[i][j - 1][1] + dp[i][j - 1][0];

			if (i > limit) dp[i][j][0] -= dp[i - limit - 1][j][1];
			if (j > limit) dp[i][j][1] -= dp[i][j - limit - 1][0];

			dp[i][j][0] = ((dp[i][j][0] % modulo) + modulo) % modulo;
			dp[i][j][1] = ((dp[i][j][1] % modulo) + modulo) % modulo;
		}
	}

	return (dp[zero][one][0] + dp[zero][one][1]) % modulo;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const zero = 1, one = 1, limit = 2;

	const $result = numberOfStableArrays(zero, one, limit);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const zero = 1, one = 2, limit = 1;

	const $result = numberOfStableArrays(zero, one, limit);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const zero = 3, one = 3, limit = 2;

	const $result = numberOfStableArrays(zero, one, limit);
	const $expect = 14;

	assertEquals($result, $expect);
});
