function minimumBoxes(apple: number[], capacity: number[]): number {
	let applesCount = apple.reduce((a, b) => a + b);
	capacity.sort((a, b) => b - a);

	for (let i = 0; i < capacity.length; i++) {
		if ((applesCount -= capacity[i]) <= 0) return i + 1;
	}

	return -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const apple = [1, 3, 2], capacity = [4, 3, 1, 5, 2];

	const $result = minimumBoxes(apple, capacity);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const apple = [5, 5, 5], capacity = [2, 4, 2, 7];

	const $result = minimumBoxes(apple, capacity);
	const $expect = 4;

	assertEquals($result, $expect);
});
