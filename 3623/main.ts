function countTrapezoids(points: number[][]): number {
	const hLines = new Map<number, number>();
	const modulo = BigInt(1e9 + 7);

	for (const [_, y] of points) {
		hLines.set(y, 1 + (hLines.get(y) || 0));
	}

	let acc = 0n;
	let ans = 0n;

	for (const count of hLines.values()) {
		const nEdges = BigInt((count ** 2 - count) / 2);

		ans += nEdges * acc;
		ans %= modulo;

		acc += nEdges;
		acc %= modulo;
	}

	return Number(ans);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const points = [[1, 0], [2, 0], [3, 0], [2, 2], [3, 2]];

	const $result = countTrapezoids(points);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const points = [[0, 0], [1, 0], [0, 1], [2, 1]];

	const $result = countTrapezoids(points);
	const $expect = 1;

	assertEquals($result, $expect);
});
