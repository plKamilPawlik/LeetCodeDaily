function minimumCost(nums: number[], k: number, dist: number): number {
	const unique = new Set(nums);
	const sorted = Array.from(unique).sort((a, b) => a - b);

	const n = nums.length;
	const m = sorted.length;
	const targetK = k - 1;

	const bitCount = new Int32Array(m + 1);
	const bitSum = new Float64Array(m + 1);
	const rankMap = new Map<number, number>();

	sorted.forEach((v, i) => rankMap.set(v, i + 1));

	const update = (rank: number, value: number, count: number) => {
		for (; rank <= m; rank += rank & -rank) {
			bitSum[rank] += value;
			bitCount[rank] += count;
		}
	};

	let maxP = 1;
	let minQ = Infinity;

	while ((maxP << 1) <= m) maxP <<= 1;

	for (let i = 1; i < n; i++) {
		update(rankMap.get(nums[i])!, nums[i], 1);

		if (i > dist + 1) {
			const oldValue = nums[i - dist - 1];
			update(rankMap.get(oldValue)!, -oldValue, -1);
		}

		if (i >= targetK) {
			let idx = 0, cc = 0, cs = 0;

			for (let p = maxP; p > 0; p >>= 1) {
				if (idx + p > m || bitCount[idx + p] >= targetK - cc) continue;

				idx += p;
				cc += bitCount[idx];
				cs += bitSum[idx];
			}

			if (cc < targetK) cs += (targetK - cc) * sorted[idx];

			minQ = Math.min(minQ, cs);
		}
	}

	return nums[0] + minQ;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 3, 2, 6, 4, 2], k = 3, dist = 3;

	const $result = minimumCost(nums, k, dist);
	const $expect = 5;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [10, 1, 2, 2, 2, 1], k = 4, dist = 3;

	const $result = minimumCost(nums, k, dist);
	const $expect = 15;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [10, 8, 18, 9], k = 3, dist = 1;

	const $result = minimumCost(nums, k, dist);
	const $expect = 36;

	assertEquals($result, $expect);
});
