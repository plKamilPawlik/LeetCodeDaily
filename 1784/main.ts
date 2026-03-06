function checkOnesSegment(s: string): boolean {
	let segments = 0;

	for (let i = 0; i < s.length && segments <= 1; i++) {
		if (s[i] === s[i - 1]) continue;
		if (s[i] === "1") segments++;
	}

	return segments <= 1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "1001";

	const $result = checkOnesSegment(s);
	const $expect = false;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "110";

	const $result = checkOnesSegment(s);
	const $expect = true;

	assertEquals($result, $expect);
});
