function createGrid(m: number, n: number): string[] {
	const path = ".".repeat(n);
	const grid = [path];

	for (let i = 0; i < m - 1; i++) {
		grid.push("." + "#".repeat(n - 1));
	}

	return grid.reverse();
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const m = 2, n = 3;

	const $result = createGrid(m, n);
	const $expect = ["..#", "#.."];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const m = 3, n = 3;

	const $result = createGrid(m, n);
	const $expect = ["..#", "#..", "##."];

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const m = 1, n = 4;

	const $result = createGrid(m, n);
	const $expect = ["...."];

	assertEquals($result, $expect);
});
