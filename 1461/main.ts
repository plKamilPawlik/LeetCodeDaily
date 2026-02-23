function hasAllCodes(s: string, k: number): boolean {
	const set = new Set<string>();

	for (let i = 0; i <= s.length - k; i++) {
		set.add(s.substring(i, i + k));
	}

	return set.size === 2 ** k;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "00110110", k = 2;

	const $result = hasAllCodes(s, k);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "0110", k = 1;

	const $result = hasAllCodes(s, k);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const s = "0110", k = 2;

	const $result = hasAllCodes(s, k);
	const $expect = false;

	assertEquals($result, $expect);
});
