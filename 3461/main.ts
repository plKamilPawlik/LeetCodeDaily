function hasSameDigits(s: string): boolean {
	const mod = 10;

	while (s.length > 2) {
		const arr: number[] = [];

		for (let i = 1; i < s.length; i++) {
			const a = +s[i - 1];
			const b = +s[i];

			arr.push((a + b) % mod);
		}

		s = arr.join("");
	}

	return s[0] === s[1];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const s = "3902";

	const $result = hasSameDigits(s);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const s = "34789";

	const $result = hasSameDigits(s);
	const $expect = false;

	assertEquals($result, $expect);
});
