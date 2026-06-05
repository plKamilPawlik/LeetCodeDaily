function totalWaviness(num1: number, num2: number): number {
	let totalWaviness = 0;

	for (let num = Math.max(num1, 101); num <= num2; num++) {
		const str = num.toString();

		for (let i = 1; i < str.length - 1; i++) {
			const c1 = str.charCodeAt(i - 1);
			const c2 = str.charCodeAt(i);
			const c3 = str.charCodeAt(i + 1);

			if (c1 < c2 && c2 > c3) {
				totalWaviness++;
			}

			if (c1 > c2 && c2 < c3) {
				totalWaviness++;
			}
		}
	}

	return totalWaviness;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const num1 = 120, num2 = 130;

	const $result = totalWaviness(num1, num2);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const num1 = 198, num2 = 202;

	const $result = totalWaviness(num1, num2);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const num1 = 4848, num2 = 4848;

	const $result = totalWaviness(num1, num2);
	const $expect = 2;

	assertEquals($result, $expect);
});
