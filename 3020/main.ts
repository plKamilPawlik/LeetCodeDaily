function maximumLength(nums: number[]): number {
	const count = new Map<number, number>();

	for (const num of nums) {
		count.set(num, 1 + (count.get(num) || 0));
	}

	let countOnes = 0;
	let maxLength = 0;

	if (count.has(1)) {
		countOnes = count.get(1)!;
		countOnes -= 1 - (countOnes & 1);
	}

	for (const key of count.keys()) {
		if (key === 1) continue;

		let length = 1;
		let value = key;

		while (count.get(value)! >= 2 && count.has(value ** 2)) {
			value = value ** 2;
			length += 2;
		}

		maxLength = Math.max(maxLength, length);
	}

	return Math.max(countOnes, maxLength);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [5, 4, 1, 2, 2];

	const $result = maximumLength(nums);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 3, 2, 4];

	const $result = maximumLength(nums);
	const $expect = 1;

	assertEquals($result, $expect);
});
