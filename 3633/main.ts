function earliestFinishTime(
	landStartTime: number[],
	landDuration: number[],
	waterStartTime: number[],
	waterDuration: number[],
): number {
	const n = landDuration.length;
	const m = waterDuration.length;

	let t = Infinity;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (landStartTime[i] < waterStartTime[j]) {
				const t1 = landDuration[i] + landStartTime[i];
				const t2 = waterDuration[j] + Math.max(t1, waterStartTime[j]);

				t = Math.min(t, t2);
			} else {
				const t1 = waterDuration[j] + waterStartTime[j];
				const t2 = landDuration[i] + Math.max(t1, landStartTime[i]);

				t = Math.min(t, t2);
			}
		}
	}

	return t;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const landStartTime = [2, 8],
		landDuration = [4, 1],
		waterStartTime = [6],
		waterDuration = [3];

	const $result = earliestFinishTime(
		landStartTime,
		landDuration,
		waterStartTime,
		waterDuration,
	);
	const $expect = 9;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const landStartTime = [5],
		landDuration = [3],
		waterStartTime = [1],
		waterDuration = [10];

	const $result = earliestFinishTime(
		landStartTime,
		landDuration,
		waterStartTime,
		waterDuration,
	);
	const $expect = 14;

	assertEquals($result, $expect);
});
