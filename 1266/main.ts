function minTimeToVisitAllPoints(points: number[][]): number {
	let time = 0;

	for (let i = 1; i < points.length; i++) {
		const [x1, y1] = points[i - 1];
		const [x2, y2] = points[i];

		const dx = Math.abs(x2 - x1);
		const dy = Math.abs(y2 - y1);

		const d_max = Math.max(dx, dy);
		const d_min = Math.min(dx, dy);

		time += d_min + (d_max - d_min);
	}

	return time;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const points = [[1, 1], [3, 4], [-1, 0]];

	const $result = minTimeToVisitAllPoints(points);
	const $expect = 7;

	assertEquals($result, $expect);
});

Deno.test("Case 1", () => {
	const points = [[3, 2], [-2, 2]];

	const $result = minTimeToVisitAllPoints(points);
	const $expect = 5;

	assertEquals($result, $expect);
});
