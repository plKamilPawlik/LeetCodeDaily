function minNumberOperations(target: number[]): number {
    let numSteps = target[0];

    for (let i = 1; i < target.length; i++) {
        const prev = target[i - 1]
        const curr = target[i]

        // only increment at rising edge
        if (curr > prev) numSteps += curr - prev;
    }

    return numSteps;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const target = [1, 2, 3, 2, 1];

	const $result = minNumberOperations(target);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const target = [3, 1, 1, 2];

	const $result = minNumberOperations(target);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const target = [3, 1, 5, 4, 2];

	const $result = minNumberOperations(target);
	const $expect = 7;

	assertEquals($result, $expect);
});
