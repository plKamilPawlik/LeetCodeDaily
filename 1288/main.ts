function removeCoveredIntervals(intervals: number[][]): number {
	intervals.sort(([t_a0, t_a1], [t_b0, t_b1]) => (t_a0 - t_b0) || (t_b1 - t_a1));

	let count = 0;
	let range = 0;

	for (const [_, t1] of intervals) {
		count += Number(range < t1);
		range = Math.max(range, t1);
	}

	return count;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const intervals = [[1, 4], [3, 6], [2, 8]];

	const $result = removeCoveredIntervals(intervals);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const intervals = [[1, 4], [2, 3]];

	const $result = removeCoveredIntervals(intervals);
	const $expect = 1;

	assertEquals($result, $expect);
});
