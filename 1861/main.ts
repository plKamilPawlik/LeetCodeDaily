function rotateTheBox(boxGrid: string[][]): string[][] {
	const M = boxGrid.length;
	const N = boxGrid[0].length;

	for (let i = 0; i < M; i++) {
		for (let j = N - 1; j >= 0; j--) {
			while (j > 0 && boxGrid[i][j] !== ".") j--;

			const k = j;

			while (j > 0 && boxGrid[i][j] === ".") j--;

			if (boxGrid[i][j] === "#") {
				boxGrid[i][j] = ".";
				boxGrid[i][k] = "#";
				j = k;
			}
		}
	}

	const rotateBox = Array.from({ length: N }, () => Array<string>(M));

	for (let i = 0; i < M; i++) {
		for (let j = 0; j < N; j++) {
			rotateBox[j][i] = boxGrid[M - 1 - i][j];
		}
	}

	return rotateBox;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const boxGrid = [["#", ".", "#"]];

	const $result = rotateTheBox(boxGrid);
	const $expect = [
		["."],
		["#"],
		["#"],
	];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const boxGrid = [
		["#", ".", "*", "."],
		["#", "#", "*", "."],
	];

	const $result = rotateTheBox(boxGrid);
	const $expect = [
		["#", "."],
		["#", "#"],
		["*", "*"],
		[".", "."],
	];

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const boxGrid = [
		["#", "#", "*", ".", "*", "."],
		["#", "#", "#", "*", ".", "."],
		["#", "#", "#", ".", "#", "."],
	];

	const $result = rotateTheBox(boxGrid);
	const $expect = [
		[".", "#", "#"],
		[".", "#", "#"],
		["#", "#", "*"],
		["#", "*", "."],
		["#", ".", "*"],
		["#", ".", "."],
	];

	assertEquals($result, $expect);
});
