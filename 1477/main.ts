function minSumOfLengths(arr: number[], target: number): number {
	const n = arr.length;
	const dp = new Array(n + 1).fill(n);

	let acc = 0;
	let res = n + 1;

	let p = 0;
	let q = 0;

	while (q < n) {
		acc += arr[q++];

		while (acc > target) acc -= arr[p++];

		dp[q] = dp[q - 1];

		if (acc !== target) continue;

		const len = q - p;

		res = Math.min(res, dp[p] + len);
		dp[q] = Math.min(dp[q - 1], len);
	}

	return res !== n + 1 ? res : -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const arr = [3, 2, 2, 4, 3], target = 3;

	const $result = minSumOfLengths(arr, target);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const arr = [7, 3, 4, 7], target = 7;

	const $result = minSumOfLengths(arr, target);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const arr = [4, 3, 2, 6, 2, 3, 4], target = 6;

	const $result = minSumOfLengths(arr, target);
	const $expect = -1;

	assertEquals($result, $expect);
});
