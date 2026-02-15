function addBinary(a: string, b: string): string {
	const ans = <number[]> [];
	const len = Math.max(a.length, b.length);

	let cary = 0;

	for (let i = 1; i <= len; i++) {
		let sum = cary;

		if (a.at(-i) === "1") sum++;
		if (b.at(-i) === "1") sum++;

		if (sum >= 2) {
			sum %= 2;
			cary = 1;
		} else {
			cary = 0;
		}

		ans.push(sum);
	}

	if (cary) ans.push(1);

	return ans.reverse().join("");
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const a = "11", b = "1";

	const $result = addBinary(a, b);
	const $expect = "100";

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const a = "1010", b = "1011";

	const $result = addBinary(a, b);
	const $expect = "10101";

	assertEquals($result, $expect);
});
