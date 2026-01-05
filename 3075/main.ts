function maximumHappinessSum(happiness: number[], k: number): number {
	happiness.sort((a, b) => a - b);

	let totalHappiness = 0;

	for (let i = 0; i < k; i++) {
		const extraHappiness = happiness[happiness.length - i - 1] - i;

		if (extraHappiness > 0) {
			totalHappiness += extraHappiness;
		} else break;
	}

	return totalHappiness;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const happiness = [1, 2, 3], k = 2;

	const $result = maximumHappinessSum(happiness, k);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const happiness = [1, 1, 1, 1], k = 2;

	const $result = maximumHappinessSum(happiness, k);
	const $expect = 1;

	assertEquals($result, $expect);
});
