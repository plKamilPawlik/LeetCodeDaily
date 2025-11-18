function isOneBitCharacter(bits: number[]): boolean {
	let idx = 0;

	while (idx < bits.length - 1) {
		if (bits[idx++] === 1) idx++;
	}

	return idx === bits.length - 1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const bits = [1, 0, 0];

	const $result = isOneBitCharacter(bits);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const bits = [1, 1, 1, 0];

	const $result = isOneBitCharacter(bits);
	const $expect = false;

	assertEquals($result, $expect);
});
