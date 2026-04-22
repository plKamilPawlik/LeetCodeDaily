function twoEditWords(queries: string[], dictionary: string[]): string[] {
	const validQueries: string[] = [];
	const isValidPair = (str1: string, str2: string): boolean => {
		let dist = 0;

		for (let i = 0; i < str1.length && dist <= 2; i++) {
			if (str1[i] !== str2[i]) dist++;
		}

		return dist <= 2;
	};

	for (let i = 0; i < queries.length; i++) {
		for (let j = 0; j < dictionary.length; j++) {
			if (isValidPair(queries[i], dictionary[j])) {
				validQueries.push(queries[i]);
				break;
			}
		}
	}

	return validQueries;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const queries = ["word", "note", "ants", "wood"], dictionary = ["wood", "joke", "moat"];

	const $result = twoEditWords(queries, dictionary);
	const $expect = ["word", "note", "wood"];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const queries = ["yes"], dictionary = ["not"];

	const $result = twoEditWords(queries, dictionary);
	const $expect = [] as string[];

	assertEquals($result, $expect);
});
