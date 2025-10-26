function totalMoney(n: number): number {
	const n_weaks = Math.floor(n / 7);
	const n_days = n % 7;

	const sum = (x: number): number => ((x + 1) / 2) * x;

	return 28 * n_weaks + 7 * sum(n_weaks - 1) + sum(n_days) + n_weaks * n_days;
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
