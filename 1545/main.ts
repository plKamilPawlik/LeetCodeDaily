function findKthBit(n: number, k: number): string {
	const prefix = new Array(n + 1);
	prefix[0] = "";
	prefix[1] = "0";

	const inverse = (bits: string[]): string[] => bits.map((c) => c === "1" ? "0" : "1");
	const reverse = (bits: string[]): string[] => bits.reverse();

	for (let i = 2; i <= n; i++) {
		prefix[i] = prefix[i - 1] + "1" + reverse(inverse([...prefix[i - 1]])).join("");
	}

	return prefix[n][k - 1];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 3, k = 1;

	const $result = findKthBit(n, k);
	const $expect = "0";

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 4, k = 11;

	const $result = findKthBit(n, k);
	const $expect = "1";

	assertEquals($result, $expect);
});
