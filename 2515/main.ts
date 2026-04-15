function closestTarget(words: string[], target: string, startIndex: number): number {
	const n = words.length;
	let dist = words.length;

	for (let i = 0; i < n; i++) {
		if (words[i] !== target) continue;
		if (i === startIndex) return 0;

		if (i < startIndex) {
			dist = Math.min(dist, startIndex - i, i + n - startIndex);
		}

		if (i > startIndex) {
			dist = Math.min(dist, i - startIndex, startIndex + n - i);
		}
	}

	return dist < words.length ? dist : -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const words = ["hello", "i", "am", "leetcode", "hello"], target = "hello", startIndex = 1;

	const $result = closestTarget(words, target, startIndex);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const words = ["a", "b", "leetcode"], target = "leetcode", startIndex = 0;

	const $result = closestTarget(words, target, startIndex);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const words = ["i", "eat", "leetcode"], target = "ate", startIndex = 0;

	const $result = closestTarget(words, target, startIndex);
	const $expect = -1;

	assertEquals($result, $expect);
});
