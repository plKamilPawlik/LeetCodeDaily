function minimumAbsDifference(arr: number[]): number[][] {
	arr.sort((a, b) => a - b);

	let minDiff = Infinity;
	let result = <number[][]> [];

	for (let i = 0; i < arr.length - 1; i++) {
		const absDiff = Math.abs(arr[i] - arr[i + 1]);

		if (minDiff > absDiff) {
			minDiff = absDiff;
			result = [];
		}

		if (minDiff === absDiff) {
			result.push([arr[i], arr[i + 1]]);
		}
	}

	return result;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const arr = [4, 2, 1, 3];

	const $result = minimumAbsDifference(arr);
	const $expect = [[1, 2], [2, 3], [3, 4]];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const arr = [1, 3, 6, 10, 15];

	const $result = minimumAbsDifference(arr);
	const $expect = [[1, 3]];

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const arr = [3, 8, -10, 23, 19, -4, -14, 27];

	const $result = minimumAbsDifference(arr);
	const $expect = [[-14, -10], [19, 23], [23, 27]];

	assertEquals($result, $expect);
});
