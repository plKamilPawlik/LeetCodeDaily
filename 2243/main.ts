function digitSum(s: string, k: number): string {
	let str = s;

	while (str.length > k) {
		let next = "";

		for (let i = 0; i < str.length; i += k) {
			const substr = str.slice(i, i + k);
			const digits = [...substr].map(Number);
			const sum = digits.reduce((p, c) => p + c);

			next += String(sum);
		}

		str = next;
	}

	return str;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s: string = "11111222223";
	const k: number = 3;

	const $result = digitSum(s, k);
	const $expect = "135";

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s: string = "00000000";
	const k: number = 3;

	const $result = digitSum(s, k);
	const $expect = "000";

	assertEquals($result, $expect);
});
