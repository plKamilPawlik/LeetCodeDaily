function binaryGap(n: number): number {
	const INT_SIZE = 32;

	let p = -1;
	let q = 1;

	for (let i = 0; p < 0 && i < INT_SIZE; i++) {
		if (n & (1 << i)) p = i;
	}

	if (p < 0) return 0;
	else q += p;

	let maxGap = 0;

	while (q < INT_SIZE) {
		while (q < INT_SIZE && (n & (1 << q)) === 0) q++;
		if (q === INT_SIZE) break;

		maxGap = Math.max(maxGap, q - p);

		p = q;
		q++;
	}

	return maxGap;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 22;

	const $result = binaryGap(n);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 8;

	const $result = binaryGap(n);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = 5;

	const $result = binaryGap(n);
	const $expect = 2;

	assertEquals($result, $expect);
});
