function minimumDeletions(s: string): number {
	const prefix_a_r = new Array<number>(s.length);
	const prefix_b_l = new Array<number>(s.length);

	for (let i = 0; i < s.length; i++) {
		const j = s.length - i - 1;

		prefix_a_r[j] = Number(s[j + 1] === "a") + (prefix_a_r[j + 1] || 0);
		prefix_b_l[i] = Number(s[i - 1] === "b") + (prefix_b_l[i - 1] || 0);
	}

	let numDeletions = s.length;

	for (let i = 0; i < s.length; i++) {
		numDeletions = Math.min(numDeletions, prefix_a_r[i] + prefix_b_l[i]);
	}

	return numDeletions;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "aababbab";

	const $result = minimumDeletions(s);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "bbaaaaabb";

	const $result = minimumDeletions(s);
	const $expect = 2;

	assertEquals($result, $expect);
});
