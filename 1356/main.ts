function sortByBits(arr: number[]): number[] {
	const countBits = (n: number): number => {
		let count = n & 1;

		while ((n >>= 1)) if (n & 1) count++;

		return count;
	};

	return arr.sort((a, b) => {
		const _a = countBits(a);
		const _b = countBits(b);

		if (_a === _b) {
			return a - b;
		} else {
			return _a - _b;
		}
	});
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	const $result = sortByBits(arr);
	const $expect = [0, 1, 2, 4, 8, 3, 5, 6, 7];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];

	const $result = sortByBits(arr);
	const $expect = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

	assertEquals($result, $expect);
});
