function mapWordWeights(words: string[], weights: number[]): string {
	const offset_a = "a".charCodeAt(0);
	const offset_z = "z".charCodeAt(0);

	const values = words.map((word) => {
		let value = 0;

		for (let i = 0; i < word.length; i++) {
			value += weights[word.charCodeAt(i) - offset_a];
		}

		return String.fromCharCode(offset_z - (value % 26));
	});

	return values.join("");
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const words = ["abcd", "def", "xyz"],
		weights = [
			5,
			3,
			12,
			14,
			1,
			2,
			3,
			2,
			10,
			6,
			6,
			9,
			7,
			8,
			7,
			10,
			8,
			9,
			6,
			9,
			9,
			8,
			3,
			7,
			7,
			2,
		];

	const $result = mapWordWeights(words, weights);
	const $expect = "rij";

	assertEquals($result, $expect);
});
