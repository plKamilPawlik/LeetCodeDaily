function longestBalanced(s: string): number {
	const charactersFrequency = new Array<number>(26);
	const isBalanced = (reference: number): boolean => {
		for (const freq of charactersFrequency) {
			if (freq && freq !== reference) return false;
		}

		return true;
	};

	let maxLength = 0;

	for (let i = 0; i < s.length - maxLength; i++) {
		charactersFrequency.fill(0);

		for (let j = i; j < s.length; j++) {
			const charCode = s.charCodeAt(j) - 97;
			charactersFrequency[charCode]++;

			if (isBalanced(charactersFrequency[charCode])) {
				maxLength = Math.max(maxLength, j - i + 1);
			}
		}
	}

	return maxLength;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "abbac";

	const $result = longestBalanced(s);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "zzabccy";

	const $result = longestBalanced(s);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const s = "aba";

	const $result = longestBalanced(s);
	const $expect = 2;

	assertEquals($result, $expect);
});
