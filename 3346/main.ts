function maxFrequency(nums: number[], k: number, numOperations: number): number {
	nums.sort((p, q) => p - q);

	const freq: Record<number, number> = {};

	for (const num of nums) {
		if (freq[num]) {
			freq[num]++;
		} else {
			freq[num] = 1;
		}
	}

	const minIndex = (value: number): number => {
		let p = 0;
		let q = nums.length - 1;

		while (p < q) {
			const mid = Math.floor((p + q) / 2);

			if (nums[mid] < value) {
				p = mid + 1;
			} else {
				q = mid;
			}
		}

		return p;
	};

	const maxIndex = (value: number): number => {
		let p = 0;
		let q = nums.length - 1;

		while (p < q) {
			const mid = Math.ceil((p + q) / 2);

			if (nums[mid] > value) {
				q = mid - 1;
			} else {
				p = mid;
			}
		}

		return p;
	};

	const min = nums.at(0)!;
	const max = nums.at(-1)!;
	let ans = 0;

	for (let i = min; i <= max; i++) {
		const p = minIndex(i - k);
		const q = maxIndex(i + k);

		ans = Math.max(ans, Math.min(q - p + 1, numOperations + (freq[i] || 0)));
	}

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const nums = [1, 4, 5];
	const k = 1;
	const numOperations = 2;

	const $result = maxFrequency(nums, k, numOperations);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const nums = [5, 11, 20, 20];
	const k = 5;
	const numOperations = 1;

	const $result = maxFrequency(nums, k, numOperations);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const nums = [88, 53];
	const k = 27;
	const numOperations = 2;

	const $result = maxFrequency(nums, k, numOperations);
	const $expect = 2;

	assertEquals($result, $expect);
});
