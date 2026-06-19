function largestAltitude(gain: number[]): number {
	let currentAltitude = 0;
	let highestAltitude = 0;

	for (let i = 0; i < gain.length; i++) {
		currentAltitude += gain[i];

		if (highestAltitude < currentAltitude) {
			highestAltitude = currentAltitude;
		}
	}

	return highestAltitude;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const gain = [-5, 1, 5, 0, -7];

	const $result = largestAltitude(gain);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const gain = [-4, -3, -2, -1, 4, 3, 2];

	const $result = largestAltitude(gain);
	const $expect = 0;

	assertEquals($result, $expect);
});
