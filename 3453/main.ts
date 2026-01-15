function separateSquares(squares: number[][]): number {
	const getAreaUnder = (limit_y: number): number => {
		let area = 0;

		for (const [x, y, l] of squares) {
			if (y >= limit_y) continue;
			area += l * Math.min(limit_y - y, l);
		}

		return area;
	};

	const totalArea = getAreaUnder(Infinity);
	const tolerance = 1e-5;

	let min = 0;
	let max = 1e9;

	while (Math.abs(max - min) > tolerance) {
		const mid = (max + min) / 2;
		const area = getAreaUnder(mid);

		if (area >= totalArea / 2) {
			max = mid;
		} else {
			min = mid;
		}
	}

	return max;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertAlmostEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const squares = [[0, 0, 1], [2, 2, 1]];

	const $result = separateSquares(squares);
	const $expect = 1;

	assertAlmostEquals($result, $expect, 1e-5);
});

Deno.test("Case 2", () => {
	const squares = [[0, 0, 2], [1, 1, 1]];

	const $result = separateSquares(squares);
	const $expect = 1.16667;

	assertAlmostEquals($result, $expect, 1e-5);
});
