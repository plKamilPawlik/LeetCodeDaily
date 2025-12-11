function countCoveredBuildings(n: number, buildings: number[][]): number {
	const XY = new Map<number, number[]>();
	const YX = new Map<number, number[]>();

	for (const [x, y] of buildings) {
		if (XY.has(x)) {
			XY.get(x)!.push(y);
		} else {
			XY.set(x, [y]);
		}

		if (YX.has(y)) {
			YX.get(y)!.push(x);
		} else {
			YX.set(y, [x]);
		}
	}

	XY.forEach((arr) => arr.sort((a, b) => a - b));
	YX.forEach((arr) => arr.sort((a, b) => a - b));

	let coveredBuildings = 0;

	for (const [x, y] of buildings) {
		if (XY.get(x)!.at(0)! === y) continue;
		if (XY.get(x)!.at(-1)! === y) continue;

		if (YX.get(y)!.at(0)! === x) continue;
		if (YX.get(y)!.at(-1)! === x) continue;

		coveredBuildings++;
	}

	return coveredBuildings;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 3;
	const buildings = [[1, 2], [2, 2], [3, 2], [2, 1], [2, 3]];

	const $result = countCoveredBuildings(n, buildings);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 3;
	const buildings = [[1, 1], [1, 2], [2, 1], [2, 2]];

	const $result = countCoveredBuildings(n, buildings);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 1", () => {
	const n = 5;
	const buildings = [[1, 3], [3, 2], [3, 3], [3, 5], [5, 3]];

	const $result = countCoveredBuildings(n, buildings);
	const $expect = 1;

	assertEquals($result, $expect);
});
