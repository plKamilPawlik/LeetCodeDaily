function maximizeSquareArea(
	m: number,
	n: number,
	hFences: number[],
	vFences: number[],
): number {
	const getDifferences = (arr: number[], range: number): Set<number> => {
		const differences = new Set<number>();

		arr.push(1, range);
		arr.sort((a, b) => a - b);

		for (let i = 0; i < arr.length; i++) {
			for (let j = i + 1; j < arr.length; j++) {
				differences.add(arr[j] - arr[i]);
			}
		}

		return differences;
	};

	const hDifferences = getDifferences(hFences, m);
	const vDifferences = getDifferences(vFences, n);

	let res = -1;

	for (const dif of hDifferences) {
		if (vDifferences.has(dif)) res = Math.max(res, dif);
	}

	if (res === -1) return -1;
	else return Number((BigInt(res) * BigInt(res)) % BigInt(1e9 + 7));
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const m = 4, n = 3, hFences = [2, 3], vFences = [2];

	const $result = maximizeSquareArea(m, n, hFences, vFences);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const m = 6, n = 7, hFences = [2], vFences = [4];

	const $result = maximizeSquareArea(m, n, hFences, vFences);
	const $expect = -1;

	assertEquals($result, $expect);
});
