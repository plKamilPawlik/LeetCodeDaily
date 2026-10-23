function minOperations(nums: number[]): number {
	if (nums.length === 1) return 0;

	const n = nums.length;
	const s = nums.indexOf(0);

	let asc = true;
	let desc = true;

	for (let i = 1; i < n; i++) {
		const value = nums[(s + i) % n];

		if (value !== i) {
			asc = false;
		}

		if (value !== n - i) {
			desc = false;
		}

		if (!asc && !desc) {
			return -1;
		}
	}

	if (asc) {
		return Math.min(s, n - s + 2);
	} else {
		return Math.min(s + 2, n - s);
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [0, 2, 1];

	const $result = minOperations(nums);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 0, 2];

	const $result = minOperations(nums);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [2, 0, 1, 3];

	const $result = minOperations(nums);
	const $expect = -1;

	assertEquals($result, $expect);
});
