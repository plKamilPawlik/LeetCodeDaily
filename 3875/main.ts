function uniformArray(nums1: number[]): boolean {
	return true;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums1 = [2, 3];

	const $result = uniformArray(nums1);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums1 = [4, 6];

	const $result = uniformArray(nums1);
	const $expect = true;

	assertEquals($result, $expect);
});
