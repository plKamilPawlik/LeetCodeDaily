function findThePrefixCommonArray(A: number[], B: number[]): number[] {
	const n = A.length;
	const freq = Array<number>(n + 1).fill(0);
	const res = Array<number>(n);

	let count = 0;

	for (let i = 0; i < n; i++) {
		if (++freq[A[i]] === 2) count++;
		if (++freq[B[i]] === 2) count++;

		res[i] = count;
	}

	return res;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const A = [1, 3, 2, 4], B = [3, 1, 2, 4];

	const $result = findThePrefixCommonArray(A, B);
	const $expect = [0, 2, 3, 4];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const A = [2, 3, 1], B = [3, 1, 2];

	const $result = findThePrefixCommonArray(A, B);
	const $expect = [0, 1, 3];

	assertEquals($result, $expect);
});
