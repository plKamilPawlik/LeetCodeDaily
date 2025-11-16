function numSub(s: string): number {
	const mod = 1e9 + 7;

	let res = 0;

	for (let i = 0; i < s.length; i++) {
		let n = 0;

		while (s[i] === "1") {
			i++;
			n++;
		}

		res += Math.floor(((n + 1) * n) / 2);
	}

	return res;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const s = "0110111";

	const $result = numSub(s);
	const $expect = 9;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const s = "101";

	const $result = numSub(s);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const s = "111111";

	const $result = numSub(s);
	const $expect = 21;

	assertEquals($result, $expect);
});
