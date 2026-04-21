class DSU {
	readonly parent: number[];

	constructor(n: number) {
		this.parent = Array.from({ length: n }, (_, i) => i);
	}

	find(i: number): number {
		if (this.parent[i] !== i) {
			this.parent[i] = this.find(this.parent[i]);
		}

		return this.parent[i];
	}

	join(i: number, j: number): void {
		this.parent[this.find(i)] = this.find(j);
	}
}

function minimumHammingDistance(
	source: number[],
	target: number[],
	allowedSwaps: number[][],
): number {
	const dsu = new DSU(source.length);

	for (const [i, j] of allowedSwaps) {
		dsu.join(i, j);
	}

	const groups = new Map<number, Map<number, number>>();

	for (let i = 0; i < source.length; i++) {
		const root = dsu.find(i);
		groups.set(root, groups.get(root) || new Map());

		const freq = groups.get(root)!;
		freq.set(source[i], 1 + (freq.get(source[i]) || 0));
	}

	let distance = 0;

	for (let i = 0; i < target.length; i++) {
		const root = dsu.find(i);
		const freq = groups.get(root);

		if (freq && freq.has(target[i]) && freq.get(target[i])! > 0) {
			freq.set(target[i], freq.get(target[i])! - 1);
		} else {
			distance++;
		}
	}

	return distance;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const source = [1, 2, 3, 4], target = [2, 1, 4, 5], allowedSwaps = [[0, 1], [2, 3]];

	const $result = minimumHammingDistance(source, target, allowedSwaps);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const source = [1, 2, 3, 4], target = [1, 3, 2, 4], allowedSwaps = [] as number[][];

	const $result = minimumHammingDistance(source, target, allowedSwaps);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const source = [5, 1, 2, 4, 3],
		target = [1, 5, 4, 2, 3],
		allowedSwaps = [[0, 4], [4, 2], [1, 3], [1, 4]];

	const $result = minimumHammingDistance(source, target, allowedSwaps);
	const $expect = 0;

	assertEquals($result, $expect);
});
