function countCollisions(directions: string): number {
	let l = 0;
	let r = directions.length - 1;

	// trim
	while (directions[l] === "L") l++;
	while (directions[r] === "R") r--;

	let collisions = 0;

	for (let i = l; i <= r; i++) {
		if (directions[i] !== "S") {
			collisions++;
		}
	}

	return collisions;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const directions = "RLRSLL";

	const $result = countCollisions(directions);
	const $expect = 5;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const directions = "LLRR";

	const $result = countCollisions(directions);
	const $expect = 0;

	assertEquals($result, $expect);
});
