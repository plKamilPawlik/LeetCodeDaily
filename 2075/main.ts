function decodeCiphertext(encodedText: string, rows: number): string {
	const cols = encodedText.length / rows;

	const lines: string[] = [];
	const chars: string[] = [];

	for (let i = 0; i < encodedText.length; i += cols) {
		lines.push(encodedText.slice(i, i + cols));
	}

	for (let j = 0; j < cols; j++) {
		for (let i = 0; i < rows && i + j < cols; i++) {
			chars.push(lines[i][i + j]);
		}
	}

	return chars.join("").trimEnd();
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const encodedText = "ch   ie   pr", rows = 3;

	const $result = decodeCiphertext(encodedText, rows);
	const $expect = "cipher";

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const encodedText = "iveo    eed   l te   olc", rows = 4;

	const $result = decodeCiphertext(encodedText, rows);
	const $expect = "i love leetcode";

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const encodedText = "coding", rows = 1;

	const $result = decodeCiphertext(encodedText, rows);
	const $expect = "coding";

	assertEquals($result, $expect);
});
