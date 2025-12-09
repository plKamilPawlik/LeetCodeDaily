function specialTriplets(nums: number[]): number {
	const aggr: Record<number, number> = {};
	const freq: Record<number, number> = {};

	for (const num of nums) {
		if (freq[num]) {
			freq[num]++;
		} else {
			freq[num] = 1;
		}
	}

	let validTriplets = 0;

	for (const num of nums) {
		const target = num * 2;

		if (aggr[num]) {
			aggr[num]++;
		} else {
			aggr[num] = 1;
		}

		if (!aggr[target]) continue;
		if (!freq[target]) continue;

		const i = aggr[target] - (num ? 0 : 1);
		const k = freq[target] - aggr[target];

		validTriplets += i * k;
		validTriplets %= 1e9 + 7;
	}

	return validTriplets;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [6, 3, 6];

	const $result = specialTriplets(nums);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [0, 1, 0, 0];

	const $result = specialTriplets(nums);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [8, 4, 2, 8, 4];

	const $result = specialTriplets(nums);
	const $expect = 2;

	assertEquals($result, $expect);
});
