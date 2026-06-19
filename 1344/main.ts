function angleClock(hour: number, minutes: number): number {
	const angleHourHand = (hour % 12) * 30 + minutes * 0.5;
	const angleMinuteHand = minutes * 6;

	const diff = Math.abs(angleHourHand - angleMinuteHand);

	return Math.min(diff, 360 - diff);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertAlmostEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const hour = 12, minutes = 30;

	const $result = angleClock(hour, minutes);
	const $expect = 165;

	assertAlmostEquals($result, $expect, 1e-5);
});

Deno.test("Case 2", () => {
	const hour = 3, minutes = 30;

	const $result = angleClock(hour, minutes);
	const $expect = 75;

	assertAlmostEquals($result, $expect, 1e-5);
});

Deno.test("Case 3", () => {
	const hour = 3, minutes = 15;

	const $result = angleClock(hour, minutes);
	const $expect = 7.5;

	assertAlmostEquals($result, $expect, 1e-5);
});
