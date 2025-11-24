function maxSumDivThree(nums: number[]): number {
	const dp: [number[], number[], number[]] = [[], [], []];
	const sum = (list: number[], p: number, q: number): number => {
		let acc = 0;

		for (let i = p; i <= q; i++) {
			acc += list[i];
		}

		return acc;
	};

	for (const num of nums) {
		dp[num % 3].push(num);
	}

	dp[1].sort((a, b) => b - a);
	dp[2].sort((a, b) => b - a);

	const l1 = dp[1].length;
	const l2 = dp[2].length;
	let ans = 0;

	for (let i = l1 - 2; i <= l1; ++i) {
		if (i < 0) continue;

		for (let j = l2 - 2; j <= l2; ++j) {
			if (j < 0 || (i - j) % 3 !== 0) continue;

			const s1 = sum(dp[1], 0, i - 1);
			const s2 = sum(dp[2], 0, j - 1);

			ans = Math.max(ans, s1 + s2);
		}
	}

	return ans + sum(dp[0], 0, dp[0].length - 1);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const nums = [3, 6, 5, 1, 8];

	const $result = maxSumDivThree(nums);
	const $expect = 18;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const nums = [4];

	const $result = maxSumDivThree(nums);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const nums = [1, 2, 3, 4, 4];

	const $result = maxSumDivThree(nums);
	const $expect = 12;

	assertEquals($result, $expect);
});
