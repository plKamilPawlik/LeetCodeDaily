function getHappyString(n: number, k: number): string {
	const chars = ["a", "b", "c"];
	const strings: string[] = [];

	(function dfs(s = ""): void {
		if (strings.length >= k) return;

		if (s.length === n) {
			strings.push(s);
		} else {
			chars.forEach((c) => (c !== s.at(-1)) && dfs(s + c));
		}
	})();

	return strings[k - 1] || "";
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 1, k = 3;

	const $result = getHappyString(n, k);
	const $expect = "c";

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 1, k = 4;

	const $result = getHappyString(n, k);
	const $expect = "";

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = 3, k = 9;

	const $result = getHappyString(n, k);
	const $expect = "cab";

	assertEquals($result, $expect);
});
