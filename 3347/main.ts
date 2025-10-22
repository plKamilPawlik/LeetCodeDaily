function maxFrequency(nums: number[], k: number, numOperations: number): number {
	nums.sort((p, q) => p - q);

	const freq: Record<number, number> = {};
	const modes: Set<number> = new Set();

	const addMode = (value: number): void => {
		modes.add(value);

		if (value - k >= nums.at(0)!) modes.add(value - k);
		if (value + k <= nums.at(-1)!) modes.add(value + k);
	};

	for (const num of nums) {
		addMode(num);

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

	let ans = 0;

	for (const mode of modes) {
		const p = minIndex(mode - k);
		const q = maxIndex(mode + k);

		ans = Math.max(ans, Math.min(q - p + 1, numOperations + (freq[mode] || 0)));
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
