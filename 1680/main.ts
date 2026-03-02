function concatenatedBinary(n: number): number {
	const MOD = 1e9 + 7;
	let res = 0;

	for (let i = 1; i <= n; i++) {
		const len = i.toString(2).length;
		res = ((res * (1 << len)) + i) % MOD;
	}

	return res;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 1;

	const $result = concatenatedBinary(n);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 3;

	const $result = concatenatedBinary(n);
	const $expect = 27;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = 12;

	const $result = concatenatedBinary(n);
	const $expect = 505379714;

	assertEquals($result, $expect);
});
