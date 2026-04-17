function distance(a: number, b: number, c: number): number {
	return 2 * (Math.max(a, b, c) - Math.min(a, b, c));
}

function minimumDistance(nums: number[]): number {
	const indices = new Map<number, number[]>();

	for (let i = 0; i < nums.length; i++) {
		if (indices.has(nums[i])) {
			indices.get(nums[i])!.push(i);
		} else {
			indices.set(nums[i], [i]);
		}
	}

	let dist = Infinity;

	for (const key of indices.keys()) {
		const list = indices.get(key);

		if (!list || list.length < 3) continue;

		for (let i = 0; i < list.length - 2; i++) {
			const a = list[i];
			const b = list[i + 1];
			const c = list[i + 2];

			dist = Math.min(dist, distance(a, b, c));
		}
	}

	return dist < Infinity ? dist : -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 2, 1, 1, 3];

	const $result = minimumDistance(nums);
	const $expect = 6;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [1, 1, 2, 3, 2, 1, 2];

	const $result = minimumDistance(nums);
	const $expect = 8;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [1];

	const $result = minimumDistance(nums);
	const $expect = -1;

	assertEquals($result, $expect);
});
