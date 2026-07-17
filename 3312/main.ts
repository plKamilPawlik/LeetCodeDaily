function gcdValues(nums: number[], queries: number[]): number[] {
	const maxValue = Math.max(...nums);

	const count: number[] = new Array(maxValue + 1).fill(0);
	const freq: number[] = new Array(maxValue + 1).fill(0);

	for (const num of nums) freq[num]++;

	for (let gcdValue = maxValue; gcdValue >= 1; gcdValue--) {
		let total = 0;

		for (
			let multiple = gcdValue;
			multiple <= maxValue;
			multiple += gcdValue
		) {
			total += freq[multiple];
		}

		let pairs = total * (total - 1) / 2;

		for (
			let multiple = gcdValue * 2;
			multiple <= maxValue;
			multiple += gcdValue
		) {
			pairs -= count[multiple];
		}

		count[gcdValue] = pairs;
	}

	const values: number[] = [];
	const prefix: number[] = [];
	let sum = 0;

	for (let gcdValue = 1; gcdValue <= maxValue; gcdValue++) {
		if (count[gcdValue] === 0) continue;

		sum += count[gcdValue];
		values.push(gcdValue);
		prefix.push(sum);
	}

	return queries.map((query) => {
		let left = 0, right = prefix.length;

		while (left < right) {
			const mid = Math.floor((left + right) / 2);

			if (prefix[mid] <= query) {
				left = mid + 1;
			} else {
				right = mid;
			}
		}

		return values[left];
	});
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [2, 3, 4], queries = [0, 2, 2];

	const $result = gcdValues(nums, queries);
	const $expect = [1, 2, 2];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [4, 4, 2, 1], queries = [5, 3, 1, 0];

	const $result = gcdValues(nums, queries);
	const $expect = [4, 2, 1, 1];

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [2, 2], queries = [0, 0];

	const $result = gcdValues(nums, queries);
	const $expect = [2, 2];
	assertEquals($result, $expect);
});
