function minPartitions(n: string): number {
	let maxDigit = 0;

	for (let i = 0; i < n.length && maxDigit < 9; i++) {
		if (maxDigit < n.charCodeAt(i) - 48) {
			maxDigit = n.charCodeAt(i) - 48;
		}
	}

	return maxDigit;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = "32";

	const $result = minPartitions(n);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = "82734";

	const $result = minPartitions(n);
	const $expect = 8;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = "27346209830709182346";

	const $result = minPartitions(n);
	const $expect = 9;

	assertEquals($result, $expect);
});
