function survivedRobotsHealths(
	positions: number[],
	healths: number[],
	directions: string,
): number[] {
	const order = Array.from(positions.keys()).sort((a, b) => positions[a] - positions[b]);
	const stack = <number[]> [];

	for (const i of order) {
		if (directions[i] === "R") {
			stack.push(i);
			continue;
		}

		while (stack.length && healths[i]) {
			const j = stack[stack.length - 1];

			if (healths[j] > healths[i]) {
				healths[j]--;
				healths[i] = 0;
				continue;
			}

			if (healths[j] < healths[i]) {
				healths[j] = 0;
				healths[i]--;
				stack.pop();
				continue;
			}

			if (healths[j] === healths[i]) {
				healths[j] = 0;
				healths[i] = 0;
				stack.pop();
				continue;
			}
		}
	}

	return healths.filter((health) => health);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const positions = [5, 4, 3, 2, 1], healths = [2, 17, 9, 15, 10], directions = "RRRRR";

	const $result = survivedRobotsHealths(positions, healths, directions);
	const $expect = [2, 17, 9, 15, 10];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const positions = [3, 5, 2, 6], healths = [10, 10, 15, 12], directions = "RLRL";

	const $result = survivedRobotsHealths(positions, healths, directions);
	const $expect = [14];

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const positions = [1, 2, 5, 6], healths = [10, 10, 11, 11], directions = "RLRL";

	const $result = survivedRobotsHealths(positions, healths, directions);
	const $expect = [] as number[];

	assertEquals($result, $expect);
});
