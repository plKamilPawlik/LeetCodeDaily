function judgeCircle(moves: string): boolean {
	let dx = 0, dy = 0;

	for (const move of moves) {
		if (move === "L") dx++;
		if (move === "R") dx--;
		if (move === "D") dy++;
		if (move === "U") dy--;
	}

	return !(dx | dy);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const moves = "UD";

	const $result = judgeCircle(moves);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const moves = "LL";

	const $result = judgeCircle(moves);
	const $expect = false;

	assertEquals($result, $expect);
});
