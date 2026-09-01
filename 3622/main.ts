function checkDivisibility(n: number): boolean {
	let digitProduct = 1;
	let digitSum = 0;

	for (let i = n; i > 0;) {
		const d = i % 10;

		digitProduct *= d;
		digitSum += d;

		i = Math.floor(i / 10);
	}

	return n % (digitProduct + digitSum) === 0;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 99;

	const $result = checkDivisibility(n);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 23;

	const $result = checkDivisibility(n);
	const $expect = false;

	assertEquals($result, $expect);
});
