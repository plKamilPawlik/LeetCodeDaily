function findRotation(mat: number[][], target: number[][]): boolean {
	const equals = (arr1: number[][], arr2: number[][]): boolean => {
		for (let m = 0; m < arr1.length; m++) {
			for (let n = 0; n < arr1.length; n++) {
				if (arr1[m][n] !== arr2[m][n]) return false;
			}
		}

		return true;
	};

	const rotate = (arr: number[][]): void => {
		for (let m = 0; m < arr.length; m++) {
			for (let n = m; n < arr.length; n++) {
				[arr[m][n], arr[n][m]] = [arr[n][m], arr[m][n]];
			}
		}

		for (let m = 0; m < arr.length; m++) {
			arr[m].reverse();
		}
	};

	for (let r = 0; r < 4; r++) {
		if (equals(mat, target)) return true;
		else rotate(mat);
	}

	return false;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const mat = [[0, 1], [1, 0]], target = [[1, 0], [0, 1]];

	const $result = findRotation(mat, target);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const mat = [[0, 1], [1, 1]], target = [[1, 0], [0, 1]];

	const $result = findRotation(mat, target);
	const $expect = false;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const mat = [[0, 0, 0], [0, 1, 0], [1, 1, 1]], target = [[1, 1, 1], [0, 1, 0], [0, 0, 0]];

	const $result = findRotation(mat, target);
	const $expect = true;

	assertEquals($result, $expect);
});
