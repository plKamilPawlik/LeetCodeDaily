function maxDistance(colors: number[]): number {
	let maxDistance = 0;

	for (let i = 0; i < colors.length - 1; i++) {
		for (let j = i + 1; j < colors.length; j++) {
			if (colors[i] === colors[j]) continue;

			if (maxDistance < j - i) {
				maxDistance = j - i;
			}
		}
	}

	return maxDistance;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const colors = [1, 1, 1, 6, 1, 1, 1];

	const $result = maxDistance(colors);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const colors = [1, 8, 3, 8, 3];

	const $result = maxDistance(colors);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const colors = [0, 1];

	const $result = maxDistance(colors);
	const $expect = 1;

	assertEquals($result, $expect);
});
