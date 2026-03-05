function minOperations(s: string): number {
	const s0 = Array.from({ length: s.length }, (_, i) => i % 2).join("");
	const s1 = "1".concat(s0.substring(0, s.length - 1));

	let c0 = 0;
	let c1 = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] !== s0[i]) c0++;
		if (s[i] !== s1[i]) c1++;
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
