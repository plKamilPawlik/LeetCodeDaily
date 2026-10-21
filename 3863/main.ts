function isSorted(s: string): boolean {
	for (let i = 1; i < s.length; i++) {
		if (s[i - 1] > s[i]) return false;
	}

	return true;
}

function minOperations(s: string): number {
	if (isSorted(s)) return 0;
	if (s.length === 2) return -1;

	let c_max = s[0];
	let c_min = s[0];

	for (const c of s) {
		if (c > c_max) c_max = c;
		if (c < c_min) c_min = c;
	}

	if (c_max === s[s.length - 1]) return 1;
	if (c_min === s[0]) return 1;

	for (let i = 1; i < s.length - 1; i++) {
		if (c_max === s[i]) return 2;
		if (c_min === s[i]) return 2;
	}

	return 3;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "dog";

	const $result = minOperations(s);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "card";

	const $result = minOperations(s);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const s = "gf";

	const $result = minOperations(s);
	const $expect = -1;

	assertEquals($result, $expect);
});
