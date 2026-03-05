function minOperations(s: string): number {
	let c0 = 0;
	let c1 = 0;

	for (let i = 0; i < s.length; i++) {
		const s0 = i & 1 ? "1" : "0";
		const s1 = i & 1 ? "0" : "1";

		if (s[i] !== s0) c0++;
		if (s[i] !== s1) c1++;
	}

	return Math.min(c0, c1);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "0100";

	const $result = minOperations(s);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "10";

	const $result = minOperations(s);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const s = "1111";

	const $result = minOperations(s);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 4", () => {
	const s = "101101111";

	const $result = minOperations(s);
	const $expect = 4;

	assertEquals($result, $expect);
});
