function maxDistance(colors: number[]): number {
	const index = new Map<number, number[]>();

	for (let i = 0; i < colors.length; i++) {
		const color = colors[i];

		if (index.has(color)) {
			index.get(color)!.push(i);
		} else {
			index.set(color, [i]);
		}
	}

	const keys = Array.from(index.keys());
	let maxDist = 0;

	for (let i = 0; i < keys.length - 1; i++) {
		for (let j = i + 1; j < keys.length; j++) {
			const d1 = Math.abs(index.get(keys[i])!.at(0)! - index.get(keys[j])!.at(-1)!);
			const d2 = Math.abs(index.get(keys[i])!.at(-1)! - index.get(keys[j])!.at(0)!);

			maxDist = Math.max(maxDist, d1, d2);
		}
	}

	return maxDist;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const colors = [1, 1, 1, 6, 1, 1, 1];

	const $result = maxDistance(colors);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const colors = [1, 8, 3, 8, 3];

	const $result = maxDistance(colors);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const colors = [0, 1];

	const $result = maxDistance(colors);
	const $expect = 1;

	assertEquals($result, $expect);
});
