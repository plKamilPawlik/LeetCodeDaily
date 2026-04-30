function minimumTotalDistance(robot: number[], factory: number[][]): number {
	const n = robot.length;
	const m = factory.length;

	robot.sort((a, b) => a - b);
	factory.sort((a, b) => a[0] - b[0]);

	const dp = Array.from({ length: n + 1 }, () => Array<number>(m + 1).fill(Infinity));

	for (let j = 0; j <= m; j++) {
		dp[0][j] = 0;
	}

	for (let j = 1; j <= m; j++) {
		const [pos, limit] = factory[j - 1];

		for (let i = 0; i <= n; i++) {
			dp[i][j] = dp[i][j - 1];

			let dist = 0;

			for (let k = 1; k <= limit && k <= i; k++) {
				dist += Math.abs(robot[i - k] - pos);
				dp[i][j] = Math.min(dp[i][j], dp[i - k][j - 1] + dist);
			}
		}
	}

	return dp[n][m];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const robot = [0, 4, 6], factory = [[2, 2], [6, 2]];

	const $result = minimumTotalDistance(robot, factory);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 1", () => {
	const robot = [1, -1], factory = [[-2, 1], [2, 1]];

	const $result = minimumTotalDistance(robot, factory);
	const $expect = 2;

	assertEquals($result, $expect);
});
