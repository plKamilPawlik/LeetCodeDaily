function getCommon(nums1: number[], nums2: number[]): number {
	let p = 0;
	let q = 0;

	while (p < nums1.length && q < nums2.length) {
		while (nums1[p] < nums2[q]) p++;
		if (nums1[p] === nums2[q]) return nums1[p];

		while (nums1[p] > nums2[q]) q++;
		if (nums1[p] === nums2[q]) return nums1[p];
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
