function totalMoney(n: number): number {
	let day = 0;
	let sum = 0;

	while (day < n) {
		const $week = Math.floor(day / 7);
		const $weekday = 1 + (day % 7);

		sum += $week + $weekday;
		day += 1;
	}

	return sum;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const n = 4;

	const $result = totalMoney(n);
	const $expect = 10;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const n = 10;

	const $result = totalMoney(n);
	const $expect = 37;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const n = 20;

	const $result = totalMoney(n);
	const $expect = 96;

	assertEquals($result, $expect);
});
