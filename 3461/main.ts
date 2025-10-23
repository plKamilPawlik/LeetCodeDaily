function hasSameDigits(s: string): boolean {
	const mod = 10;
	const arr = s.split("").map((c) => Number(c));
	let round = s.length - 2;

	while (round) {
		for (let i = 0; i < round + 1; i++) {
			const a = arr[i];
			const b = arr[i + 1];

			arr[i] = (a + b) % mod;
		}

		round--;
	}

	return arr[0] === arr[1];
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
