function maxProfit(
	n: number,
	present: number[],
	future: number[],
	hierarchy: number[][],
	budget: number,
): number {
	const subordinates = Array.from({ length: n }, () => new Array<number>());

	for (const [supervisor, subordinate] of hierarchy) {
		subordinates[supervisor - 1].push(subordinate - 1);
	}

	const dfs = (employee: number): [dp0: number[], dp1: number[], size: number] => {
		const originalPrice = present[employee];
		const discountPrice = present[employee] >> 1;

		// employee profits
		const profit0 = new Array(budget + 1).fill(0);
		const profit1 = new Array(budget + 1).fill(0);

		// subordinates profits
		const subProfit0 = new Array(budget + 1).fill(0);
		const subProfit1 = new Array(budget + 1).fill(0);

		let employeeSize = originalPrice;

		// iterate over subordinates
		for (const subordinate of subordinates[employee]) {
			const [sub0, sub1, subordinateSize] = dfs(subordinate);

			employeeSize += subordinateSize;

			for (let i = budget; i >= 0; i--) {
				for (let sub = 0; sub <= Math.min(subordinateSize, i); sub++) {
					subProfit0[i] = Math.max(subProfit0[i], subProfit0[i - sub] + sub0[sub]);
					subProfit1[i] = Math.max(subProfit1[i], subProfit1[i - sub] + sub1[sub]);
				}
			}
		}

		// iterate over budget limits
		for (let i = 0; i <= budget; i++) {
			profit0[i] = subProfit0[i];
			profit1[i] = subProfit0[i];

			if (i >= discountPrice) {
				profit1[i] = Math.max(
					subProfit0[i],
					subProfit1[i - discountPrice] + future[employee] - discountPrice,
				);
			}

			if (i >= originalPrice) {
				profit0[i] = Math.max(
					subProfit0[i],
					subProfit1[i - originalPrice] + future[employee] - originalPrice,
				);
			}
		}

		return [profit0, profit1, employeeSize];
	};

	return dfs(0)[0][budget];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 2,
		present = [1, 2],
		future = [4, 3],
		hierarchy = [[1, 2]],
		budget = 3;

	const $result = maxProfit(n, present, future, hierarchy, budget);
	const $expect = 5;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 2,
		present = [3, 4],
		future = [5, 8],
		hierarchy = [[1, 2]],
		budget = 4;

	const $result = maxProfit(n, present, future, hierarchy, budget);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = 3,
		present = [4, 6, 8],
		future = [7, 9, 11],
		hierarchy = [[1, 2], [1, 3]],
		budget = 10;

	const $result = maxProfit(n, present, future, hierarchy, budget);
	const $expect = 10;

	assertEquals($result, $expect);
});

Deno.test("Case 4", () => {
	const n = 3,
		present = [5, 2, 3],
		future = [8, 5, 6],
		hierarchy = [[1, 2], [2, 3]],
		budget = 7;

	const $result = maxProfit(n, present, future, hierarchy, budget);
	const $expect = 12;

	assertEquals($result, $expect);
});
