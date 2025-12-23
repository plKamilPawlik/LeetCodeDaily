function maxTwoEvents(events: number[][]): number {
	const n = events.length;

	events.sort((a, b) => {
		if (a[0] !== b[0]) {
			return a[0] - b[0];
		} else {
			return a[1] - b[1];
		}
	});

	const prefixMaxValue = new Array<number>(n);
	prefixMaxValue[n - 1] = events[n - 1][2];

	for (let i = n - 2; i >= 0; i--) {
		prefixMaxValue[i] = Math.max(prefixMaxValue[i + 1], events[i][2]);
	}

	const findNextEvent = (index: number): number => {
		let p = index;
		let q = n - 1;

		while (p < q) {
			const mid = (p + q) >> 1;

			if (events[mid][0] <= events[index][1]) {
				p = mid + 1;
			} else {
				q = mid;
			}
		}

		return events[p][0] > events[index][1] ? p : -1;
	};

	let maxValue = prefixMaxValue[0];

	for (let i = 0; i < n; i++) {
		const j = findNextEvent(i);

		if (j === -1) continue;

		maxValue = Math.max(maxValue, events[i][2] + prefixMaxValue[j]);
	}

	return maxValue;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const events = [[1, 3, 2], [4, 5, 2], [2, 4, 3]];

	const $result = maxTwoEvents(events);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const events = [[1, 3, 2], [4, 5, 2], [1, 5, 5]];

	const $result = maxTwoEvents(events);
	const $expect = 5;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const events = [[1, 5, 3], [1, 5, 1], [6, 6, 5]];

	const $result = maxTwoEvents(events);
	const $expect = 8;

	assertEquals($result, $expect);
});

Deno.test("Case 4", () => {
	const events = [
		[19, 36, 24],
		[70, 90, 11],
		[61, 78, 36],
		[38, 38, 70],
		[39, 83, 72],
		[8, 46, 5],
		[64, 69, 49],
		[88, 89, 39],
		[53, 77, 24],
		[35, 76, 26],
	];

	const $result = maxTwoEvents(events);
	const $expect = 142;

	assertEquals($result, $expect);
});
