function maxNumberOfBalloons(text: string): number {
	const charCount: Record<string, number> = {};

	for (const char of text) {
		if (charCount[char]) {
			charCount[char]++;
		} else {
			charCount[char] = 1;
		}
	}

	if (!charCount["b"]) return 0;
	if (!charCount["a"]) return 0;
	if (!charCount["l"]) return 0;
	if (!charCount["o"]) return 0;
	if (!charCount["n"]) return 0;

	return Math.floor(Math.min(
		charCount["b"],
		charCount["a"],
		charCount["l"] / 2,
		charCount["o"] / 2,
		charCount["n"],
	));
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const text = "nlaebolko";

	const $result = maxNumberOfBalloons(text);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const text = "loonbalxballpoon";

	const $result = maxNumberOfBalloons(text);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const text = "leetcode";

	const $result = maxNumberOfBalloons(text);
	const $expect = 0;

	assertEquals($result, $expect);
});
