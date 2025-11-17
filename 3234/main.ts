function numberOfSubstrings(s: string): number {
	const prefix = new Array<number>(s.length + 1);
	prefix[0] = -1;

	for (let i = 0; i < s.length; i++) {
		if (i === 0) {
			prefix[i + 1] = i;
		} else if (s[i - 1] === "0") {
			prefix[i + 1] = i;
		} else {
			prefix[i + 1] = prefix[i];
		}
	}

	let result = 0;

	for (let i = 1; i <= s.length; i++) {
		let zeros = s[i - 1] === "0" ? 1 : 0;

		let j = i;

		while (j > 0 && zeros ** 2 <= s.length) {
			const ones = i - prefix[j] - zeros;

			if (zeros ** 2 <= ones) {
				result += Math.min(j - prefix[j], ones - zeros ** 2 + 1);
			}

			j = prefix[j];
			zeros++;
		}
	}

	return result;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const s = "00011";

	const $result = numberOfSubstrings(s);
	const $expect = 5;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const s = "101101";

	const $result = numberOfSubstrings(s);
	const $expect = 16;

	assertEquals($result, $expect);
});
