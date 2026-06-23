function countSort(arr: number[]): number[] {
	const size = arr.length;
	const range = Math.max(...arr);

	const cnt = new Array<number>(range + 1).fill(0);
	const ans = new Array<number>(size);

	for (const value of arr) cnt[value]++;

	for (let i = 1; i < range + 1; i++) {
		cnt[i] += cnt[i - 1];
	}

	for (let i = size - 1; i >= 0; i--) {
		const index = cnt[arr[i]] - 1;
		const value = arr[i];

		ans[index] = value;
		cnt[value]--;
	}

	return ans;
}

function maxIceCream(costs: number[], coins: number): number {
	const sortedCosts = countSort(costs);

	let count = 0;

	for (const cost of sortedCosts) {
		if (coins >= cost) {
			coins -= cost;
			count++;
		} else break;
	}

	return count;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const costs = [1, 3, 2, 4, 1], coins = 7;

	const $result = maxIceCream(costs, coins);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const costs = [10, 6, 8, 7, 7, 8], coins = 5;

	const $result = maxIceCream(costs, coins);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const costs = [1, 6, 3, 1, 2, 5], coins = 20;

	const $result = maxIceCream(costs, coins);
	const $expect = 6;

	assertEquals($result, $expect);
});
