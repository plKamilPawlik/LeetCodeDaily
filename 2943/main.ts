function maximizeSquareHoleArea(
	n: number,
	m: number,
	hBars: number[],
	vBars: number[],
): number {
	// step 1: sort arrays asc
	hBars.sort((a, b) => a - b);
	vBars.sort((a, b) => a - b);

	// step 2: compute longest sequences
	const longestSequence = (arr: number[]): number => {
		let sequenceLength = 0;

		for (let i = 0; i < arr.length; i++) {
			let l = 0;

			while (arr[i + l] === arr[i + l + 1] - 1) l++;

			if (sequenceLength < l) {
				sequenceLength = l;
			}

			i += l;
		}

		return sequenceLength;
	};

	const hSeq = longestSequence(hBars);
	const vSeq = longestSequence(vBars);

	// step 3: compute side length
	const sideLength = 2 + Math.min(hSeq, vSeq);

	return sideLength ** 2;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 2, m = 1, hBars = [2, 3], vBars = [2];

	const $result = maximizeSquareHoleArea(n, m, hBars, vBars);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 1, m = 1, hBars = [2], vBars = [2];

	const $result = maximizeSquareHoleArea(n, m, hBars, vBars);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = 2, m = 3, hBars = [2, 3], vBars = [2, 4];

	const $result = maximizeSquareHoleArea(n, m, hBars, vBars);
	const $expect = 4;

	assertEquals($result, $expect);
});
