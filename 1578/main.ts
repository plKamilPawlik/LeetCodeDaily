function minCost(colors: string, neededTime: number[]): number {
	const swapTimeIncreasing = (i: number, j: number): void => {
		if (neededTime[i] > neededTime[j]) {
			[neededTime[i], neededTime[j]] = [neededTime[j], neededTime[i]];
		}
	};

	let cost = 0;

	for (let i = 1; i < colors.length; i++) {
		if (colors[i - 1] === colors[i]) swapTimeIncreasing(i - 1, i);
	}

	for (let i = 1; i < colors.length; i++) {
		if (colors[i - 1] === colors[i]) cost += neededTime[i - 1];
	}

	return cost;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const colors = "abaac";
	const neededTime = [1, 2, 3, 4, 5];

	const $result = minCost(colors, neededTime);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const colors = "abc";
	const neededTime = [1, 2, 3];

	const $result = minCost(colors, neededTime);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const colors = "aabaa";
	const neededTime = [1, 2, 3, 4, 1];

	const $result = minCost(colors, neededTime);
	const $expect = 2;

	assertEquals($result, $expect);
});
