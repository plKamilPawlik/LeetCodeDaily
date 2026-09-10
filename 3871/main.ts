function countCommas(n: number): number {
	const ranges: number[] = [0];

	for (let e = 3;; e += 3) {
		const rangeEnd = Math.min(n, 10 ** e - 1);
		ranges.push(rangeEnd);

		if (rangeEnd >= n) break;
	}

	let commas = 0;

	for (let i = 0; i < ranges.length - 1; i++) {
		const p = ranges[i];
		const q = ranges[i + 1];

		commas += (q - p) * i;
	}

	return commas;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 1002;

	const $result = countCommas(n);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 998;

	const $result = countCommas(n);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = 1000000000000000;

	const $result = countCommas(n);
	const $expect = 3998998998999005;

	assertEquals($result, $expect);
});
