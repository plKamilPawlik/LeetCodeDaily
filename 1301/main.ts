function pathsWithMaxScore(board: string[]): number[] {
	const N = board.length;
	const MOD = 1e9 + 7;

	const dp: number[][][] = Array.from(
		{ length: N },
		() => Array.from({ length: N }, () => [-1, 0]),
	);

	dp[N - 1][N - 1][0] = 0;
	dp[N - 1][N - 1][1] = 1;

	const update = (x1: number, y1: number, x2: number, y2: number): void => {
		if (dp[x1][y1][0] > dp[x2][y2][0] || dp[x2][y2][0] === -1) return;

		if (dp[x1][y1][0] < dp[x2][y2][0]) {
			dp[x1][y1][0] = dp[x2][y2][0];
			dp[x1][y1][1] = dp[x2][y2][1];
		} else {
			dp[x1][y1][1] += dp[x2][y2][1];
			dp[x1][y1][1] %= MOD;
		}
	};

	for (let x = N - 1; x >= 0; x--) {
		for (let y = N - 1; y >= 0; y--) {
			if ((x === N - 1 && y === N - 1) || board[x][y] === "X") continue;

			for (const [dx, dy] of [[+1, 0], [0, +1], [+1, +1]]) {
				if (x + dx >= N) continue;
				if (y + dy >= N) continue;

				update(x, y, x + dx, y + dy);
			}

			if (dp[x][y][0] !== -1 && board[x][y] !== "E") {
				dp[x][y][0] += Number.parseInt(board[x][y]);
			}
		}
	}

	return dp[0][0][0] !== -1 ? dp[0][0] : [0, 0];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const board = ["E23", "2X2", "12S"];

	const $result = pathsWithMaxScore(board);
	const $expect = [7, 1];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const board = ["E12", "1X1", "21S"];

	const $result = pathsWithMaxScore(board);
	const $expect = [4, 2];

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const board = ["E11", "XXX", "11S"];

	const $result = pathsWithMaxScore(board);
	const $expect = [0, 0];

	assertEquals($result, $expect);
});
