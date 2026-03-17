function minNumberOfSeconds(mountainHeight: number, workerTimes: number[]): number {
	const maxT = Math.max(...workerTimes);
	const v = Math.ceil(mountainHeight / workerTimes.length);

	let p = 0;
	let q = maxT * v * (v + 1) / 2;
	let res = q;

	while (p <= q) {
		const mid = Math.floor(p + (q - p) / 2);
		let currentHeight = 0;

		for (const time of workerTimes) {
			const work = mid / time;
			currentHeight += Math.floor((-1 + Math.sqrt(1 + 8 * work)) / 2);

			if (currentHeight >= mountainHeight) break;
		}

		if (currentHeight >= mountainHeight) {
			res = mid;
			q = mid - 1;
		} else {
			p = mid + 1;
		}
	}

	return res;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const mountainHeight = 4, workerTimes = [2, 1, 1];

	const $result = minNumberOfSeconds(mountainHeight, workerTimes);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const mountainHeight = 10, workerTimes = [3, 2, 2, 4];

	const $result = minNumberOfSeconds(mountainHeight, workerTimes);
	const $expect = 12;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const mountainHeight = 5, workerTimes = [1];

	const $result = minNumberOfSeconds(mountainHeight, workerTimes);
	const $expect = 15;

	assertEquals($result, $expect);
});
