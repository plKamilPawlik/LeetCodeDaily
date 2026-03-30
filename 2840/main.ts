function checkStrings(s1: string, s2: string): boolean {
	const s1_1 = [...s1].filter((_, i) => i % 2 === 1).sort().join();
	const s2_1 = [...s2].filter((_, i) => i % 2 === 1).sort().join();

	if (s1_1 !== s2_1) return false;

	const s1_2 = [...s1].filter((_, i) => i % 2 === 0).sort().join();
	const s2_2 = [...s2].filter((_, i) => i % 2 === 0).sort().join();

	return s1_2 === s2_2;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s1 = "abcdba", s2 = "cabdab";

	const $result = checkStrings(s1, s2);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s1 = "abe", s2 = "bea";

	const $result = checkStrings(s1, s2);
	const $expect = false;

	assertEquals($result, $expect);
});
