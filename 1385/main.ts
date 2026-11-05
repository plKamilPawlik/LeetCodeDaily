function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
	arr1.sort((a, b) => a - b);
	arr2.sort((a, b) => a - b);

	let ans = 0;
	let idx = 0;

	for (let i = 0; i < arr1.length; i++) {
		let dist = Math.abs(arr1[i] - arr2[idx]);

		for (let j = idx + 1; j < arr2.length; j++) {
			if (dist >= Math.abs(arr1[i] - arr2[j])) {
				dist = Math.abs(arr1[i] - arr2[j]);
				idx = j;
			} else break;
		}

		if (dist > d) ans++;
	}

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const arr1 = [4, 5, 8], arr2 = [10, 9, 1, 8], d = 2;

	const $result = findTheDistanceValue(arr1, arr2, d);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const arr1 = [1, 4, 2, 3], arr2 = [-4, -3, 6, 10, 20, 30], d = 3;

	const $result = findTheDistanceValue(arr1, arr2, d);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const arr1 = [2, 1, 100, 3], arr2 = [-5, -2, 10, -3, 7], d = 6;

	const $result = findTheDistanceValue(arr1, arr2, d);
	const $expect = 1;

	assertEquals($result, $expect);
});
