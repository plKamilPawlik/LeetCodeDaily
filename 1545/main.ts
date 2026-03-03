function findKthBit(n: number, k: number): string {
	const build = (s: number): string => {
		if (s <= 0) return "";
		if (s === 1) return "0";

		const str = build(s - 1);

		const inv = [...str].map((c) => c === "1" ? "0" : "1");
		const rev = inv.reverse().join("");

		return str + "1" + rev;
	};

	return build(n)[k - 1];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 3, k = 1;

	const $result = findKthBit(n, k);
	const $expect = "0";

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 4, k = 11;

	const $result = findKthBit(n, k);
	const $expect = "1";

	assertEquals($result, $expect);
});
