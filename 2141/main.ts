function maxRunTime(n: number, batteries: number[]): number {
	const sum = batteries.reduce((a, b) => a + b);

	let p = 1;
	let q = Math.floor(sum / n);

	while (p < q) {
		const time = Math.ceil((p + q) / 2);
		let extraPower = 0;

		for (const battery of batteries) {
			extraPower += Math.min(battery, time);
		}

		if (extraPower >= n * time) {
			p = time;
		} else {
			q = time - 1;
		}
	}

	return p;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 2;
	const batteries = [3, 3, 3];

	const $result = maxRunTime(n, batteries);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 2;
	const batteries = [1, 1, 1, 1];

	const $result = maxRunTime(n, batteries);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = 3;
	const batteries = [10, 10, 3, 5];

	const $result = maxRunTime(n, batteries);
	const $expect = 8;

	assertEquals($result, $expect);
});
