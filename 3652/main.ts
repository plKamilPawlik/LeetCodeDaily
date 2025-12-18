function maxProfit(prices: number[], strategy: number[], k: number): number {
	const k_half = Math.floor(k / 2);
	const profit = new Array<number>(strategy.length);

	for (let i = 0; i < strategy.length; i++) {
		profit[i] = prices[i] * strategy[i] + (profit[i - 1] || 0);
	}

	let maxProfit = profit[strategy.length - 1];
	let partialSum = 0;

	for (let i = k_half; i < k; i++) {
		partialSum += prices[i];
	}

	for (let i = 0; i < strategy.length - k + 1; i++) {
		const prefixL = profit[i - 1] || 0;
		const prefixR = profit[strategy.length - 1] - profit[i + k - 1];

		maxProfit = Math.max(maxProfit, prefixL + prefixR + partialSum);

		partialSum -= prices[i + k_half];
		partialSum += prices[i + k];
	}

	return maxProfit;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const prices = [4, 2, 8];
	const strategy = [-1, 0, 1];
	const k = 2;

	const $result = maxProfit(prices, strategy, k);
	const $expect = 10;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const prices = [5, 4, 3];
	const strategy = [1, 1, 0];
	const k = 2;

	const $result = maxProfit(prices, strategy, k);
	const $expect = 9;

	assertEquals($result, $expect);
});
