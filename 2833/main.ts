function furthestDistanceFromOrigin(moves: string): number {
	let L = 0;
	let R = 0;

	for (const move of moves) {
		if (move === "L") L++;
		if (move === "R") R++;
	}

	return moves.length + Math.abs(L - R) - (L + R);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const moves = "L_RL__R";

	const $result = furthestDistanceFromOrigin(moves);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const moves = "_R__LL_";

	const $result = furthestDistanceFromOrigin(moves);
	const $expect = 5;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const moves = "_______";

	const $result = furthestDistanceFromOrigin(moves);
	const $expect = 7;

	assertEquals($result, $expect);
});
