function largestSquareArea(bottomLeft: number[][], topRight: number[][]): number {
	const numRectangles = bottomLeft.length;

	let largestSquareSide = 0;

	for (let i = 0; i < numRectangles - 1; i++) {
		for (let j = i + 1; j < numRectangles; j++) {
			if (bottomLeft[i][1] < topRight[j][1]) {
				const x1 = Math.max(bottomLeft[i][0], bottomLeft[j][0]);
				const x2 = Math.min(topRight[i][0], topRight[j][0]);

				const y1 = Math.max(bottomLeft[i][1], bottomLeft[j][1]);
				const y2 = Math.min(topRight[i][1], topRight[j][1]);

				const dx = x2 - x1;
				const dy = y2 - y1;

				if (dx <= 0) continue;
				if (dy <= 0) continue;

				if (largestSquareSide < Math.min(dx, dy)) {
					largestSquareSide = Math.min(dx, dy);
				}
			}
		}
	}

	return largestSquareSide ** 2;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const bottomLeft = [[1, 1], [2, 2], [3, 1]], topRight = [[3, 3], [4, 4], [6, 6]];

	const $result = largestSquareArea(bottomLeft, topRight);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const bottomLeft = [[1, 1], [1, 3], [1, 5]], topRight = [[5, 5], [5, 7], [5, 9]];

	const $result = largestSquareArea(bottomLeft, topRight);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const bottomLeft = [[1, 1], [2, 2], [1, 2]], topRight = [[3, 3], [4, 4], [3, 4]];

	const $result = largestSquareArea(bottomLeft, topRight);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 4", () => {
	const bottomLeft = [[1, 1], [3, 3], [3, 1]], topRight = [[2, 2], [4, 4], [4, 2]];

	const $result = largestSquareArea(bottomLeft, topRight);
	const $expect = 0;

	assertEquals($result, $expect);
});
