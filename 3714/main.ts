function longestBalanced(s: string): number {
	// Case 1: single character
	let maxLength = oneChar(s);

	// Case 2: two distinct characters
	maxLength = Math.max(maxLength, twoChar(s, "a", "b"));
	maxLength = Math.max(maxLength, twoChar(s, "a", "c"));
	maxLength = Math.max(maxLength, twoChar(s, "b", "c"));

	// Case 3: all three characters
	const key = (i: number, j: number) => [i, j].toString();
	const pos = new Map<string, number>([[key(0, 0), -1]]);

	const count: Record<string, number> = { a: 0, b: 0, c: 0 };

	for (let i = 0; i < s.length; i++) {
		count[s[i]]++;

		const d1 = count["a"] - count["b"];
		const d2 = count["b"] - count["c"];
		const k = key(d1, d2);

		if (pos.has(k)) {
			maxLength = Math.max(maxLength, i - pos.get(k)!);
		} else {
			pos.set(k, i);
		}
	}

	return maxLength;
}

function oneChar(s: string): number {
	let maxLength = 0;

	for (let i = 0; i < s.length;) {
		let length = 1;

		while (s[i] === s[++i]) length++;

		if (maxLength < length) {
			maxLength = length;
		}
	}

	return maxLength;
}

function twoChar(s: string, x: string, y: string): number {
	const first = new Array<number>(2 * s.length + 1).fill(Infinity);
	const touched = new Array<number>(2 * s.length + 1);

	let maxLength = 0;
	let touchedSz = 0;

	for (let i = 0; i < s.length;) {
		const start = i;

		first[s.length] = start - 1;
		touched[touchedSz++] = s.length;

		let d = 0;

		while (i < s.length && (s[i] === x || s[i] === y)) {
			d += (s[i] === y) ? -1 : 1;
			const index = s.length + d;

			if (first[index] < Infinity) {
				maxLength = Math.max(maxLength, i - first[index]);
			} else {
				first[index] = i;
				touched[touchedSz++] = index;
			}

			i++;
		}

		for (let k = 0; k < touchedSz; k++) {
			first[touched[k]] = Infinity;
		}

		touchedSz = 0;
		i++;
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
	const s = "aabcc";

	const $result = longestBalanced(s);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const s = "aba";

	const $result = longestBalanced(s);
	const $expect = 2;

	assertEquals($result, $expect);
});
