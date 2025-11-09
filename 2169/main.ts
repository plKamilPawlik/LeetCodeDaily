function countOperations(num1: number, num2: number): number {
	let operationsCount = 0;

	while (num1 && num2) {
		operationsCount++;

		if (num1 >= num2) {
			num1 -= num2;
		} else {
			num2 -= num1;
		}
	}

	return operationsCount;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const num1 = 2;
	const num2 = 3;

	const $result = countOperations(num1, num2);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const num1 = 10;
	const num2 = 10;

	const $result = countOperations(num1, num2);
	const $expect = 1;

	assertEquals($result, $expect);
});
