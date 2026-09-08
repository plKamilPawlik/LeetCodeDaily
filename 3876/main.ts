function uniformArray(nums1: number[]): boolean {
	let min = nums1[0];
	let countOdd = 0;

	for (const num of nums1) {
		if (num < min) min = num;
		if (num & 1) countOdd++;
	}

	return Boolean(min & 1) || countOdd <= 0;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums1 = [1, 4, 7];

	const $result = uniformArray(nums1);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums1 = [2, 3];

	const $result = uniformArray(nums1);
	const $expect = false;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums1 = [4, 6];

	const $result = uniformArray(nums1);
	const $expect = true;

	assertEquals($result, $expect);
});
