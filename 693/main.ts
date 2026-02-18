function hasAlternatingBits(n: number): boolean {
	const str = n.toString(2);
	let set = str[0] === "1";

	for (const bit of str) {
		if (set) {
			if (bit === "0") return false;
		} else {
			if (bit === "1") return false;
		}

		set = !set;
	}

	return true;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 5;

	const $result = hasAlternatingBits(n);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 7;

	const $result = hasAlternatingBits(n);
	const $expect = false;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = 11;

	const $result = hasAlternatingBits(n);
	const $expect = false;

	assertEquals($result, $expect);
});
