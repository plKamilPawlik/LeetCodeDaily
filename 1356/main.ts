function sortByBits(arr: number[]): number[] {
	const memo = new Map<number, number>();
	const count = (val: number): number => {
		let bits = val & 1;

		while ((val >>= 1)) if (val & 1) bits++;

		return bits;
	};

	for (const val of arr) {
		if (!memo.has(val)) memo.set(val, count(val));
	}

	return arr.sort((a, b) => {
		const u = memo.get(a)!;
		const v = memo.get(b)!;

		if (u === v) return a - b;
		else return u - v;
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
