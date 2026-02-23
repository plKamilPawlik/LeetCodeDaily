function binaryGap(n: number): number {
	const s = n.toString(2);

	let p = s.indexOf("1");
	let q = p + 1;

	let gap = 0;

	while (q < s.length) {
		while (q < s.length && s[q] !== "1") q++;
		if (q === s.length) break;

		gap = Math.max(gap, q - p);

		p = q;
		q++;
	}

	return gap;
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
