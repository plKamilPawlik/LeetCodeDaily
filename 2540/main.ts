function getCommon(nums1: number[], nums2: number[]): number {
	const common = new Set(nums1);

	for (const num of nums2) {
		if (common.has(num)) return num;
	}

	return -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums1 = [1, 2, 3], nums2 = [2, 4];

	const $result = getCommon(nums1, nums2);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums1 = [1, 2, 3, 6], nums2 = [2, 3, 4, 5];

	const $result = getCommon(nums1, nums2);
	const $expect = 2;

	assertEquals($result, $expect);
});
