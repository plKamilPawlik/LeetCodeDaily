function countValidSelections(nums: number[]): number {
	const isValidSelection = (curr: number, dir: -1 | 1): boolean => {
		const list = [...nums];

		while (curr >= 0 && curr < nums.length) {
			if (list[curr] === 0) {
				curr += dir;
			} else {
				list[curr]--;
				dir *= -1;
				curr += dir;
			}
		}

		return list.every((value) => value === 0);
	};

	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			if (isValidSelection(i, -1)) sum++;
			if (isValidSelection(i, +1)) sum++;
		}
	}

	return sum;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const nums = [1, 0, 2, 0, 3];

	const $result = countValidSelections(nums);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const nums = [2, 3, 4, 0, 4, 1, 0];

	const $result = countValidSelections(nums);
	const $expect = 0;

	assertEquals($result, $expect);
});
