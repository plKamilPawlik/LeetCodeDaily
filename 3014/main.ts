function minimumPushes(word: string): number {
	const count = new Array(26).fill(0);
	const offset = "a".charCodeAt(0);

	for (let i = 0; i < word.length; i++) {
		count[word.charCodeAt(i) - offset]++;
	}

	count.sort((a, b) => b - a);

	let minimumPushes = 0;

	for (let i = 0; i < count.length; i++) {
		if (count[i] === 0) break;
		minimumPushes += count[i] * (1 + Math.floor(i / 8));
	}

	return minimumPushes;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const word = "abcde";

	const $result = minimumPushes(word);
	const $expect = 5;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const word = "xycdefghij";

	const $result = minimumPushes(word);
	const $expect = 12;

	assertEquals($result, $expect);
});
