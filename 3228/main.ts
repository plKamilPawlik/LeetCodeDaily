function maxOperations(s: string): number {
	let ans = 0;
	let acc = 0;
	let i = 0;

	while (i < s.length) {
		if (s[i] === "1") {
			acc += 1;
		} else {
			while (s[i + 1] === "0") i++;
			ans += acc;
		}

		i++;
	}

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const s = "1001101";

	const $result = maxOperations(s);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const s = "00111";

	const $result = maxOperations(s);
	const $expect = 0;

	assertEquals($result, $expect);
});
