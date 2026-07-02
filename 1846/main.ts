function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
	arr.sort((a, b) => a - b);
	arr[0] = 1;

	for (let i = 1; i < arr.length; i++) {
		arr[i] = Math.min(arr[i], arr[i - 1] + 1);
	}

	return arr[arr.length - 1];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const arr = [2, 2, 1, 2, 1];

	const $result = maximumElementAfterDecrementingAndRearranging(arr);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const arr = [100, 1, 1000];

	const $result = maximumElementAfterDecrementingAndRearranging(arr);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const arr = [1, 2, 3, 4, 5];

	const $result = maximumElementAfterDecrementingAndRearranging(arr);
	const $expect = 5;

	assertEquals($result, $expect);
});
