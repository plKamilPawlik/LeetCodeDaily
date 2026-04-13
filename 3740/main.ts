function minimumDistance(nums: number[]): number {
	let d = Infinity;

	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			if (nums[i] !== nums[j]) continue;

			for (let k = j + 1; k < nums.length; k++) {
				if (nums[i] !== nums[k]) continue;

				d = Math.min(d, Math.abs(i - j) + Math.abs(j - k) + Math.abs(k - i));
			}
		}
	}

	return d === Infinity ? -1 : d;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 2, 1, 1, 3];

	const $result = minimumDistance(nums);
	const $expect = 6;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 1, 2, 3, 2, 1, 2];

	const $result = minimumDistance(nums);
	const $expect = 8;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [1];

	const $result = minimumDistance(nums);
	const $expect = -1;

	assertEquals($result, $expect);
});
