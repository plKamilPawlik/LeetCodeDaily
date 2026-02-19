function countBinarySubstrings(s: string): number {
	const gropus = [1];

	for (let i = 1; i < s.length; i++) {
		if (s.at(i) === s.at(i - 1)) {
			gropus[gropus.length - 1]++;
		} else {
			gropus.push(1);
		}
	}

	let ans = 0;

	for (let i = 1; i < gropus.length; i++) {
		ans += Math.min(gropus[i], gropus[i - 1]);
	}

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "00110011";

	const $result = countBinarySubstrings(s);
	const $expect = 6;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "10101";

	const $result = countBinarySubstrings(s);
	const $expect = 4;

	assertEquals($result, $expect);
});
