function minimumCost(
	source: string,
	target: string,
	original: string[],
	changed: string[],
	cost: number[],
): number {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const offset = alphabet.charCodeAt(0);

	const dist = new Array<number[]>(alphabet.length);

	for (let i = 0; i < alphabet.length; i++) {
		dist[i] = new Array(alphabet.length).fill(Infinity);
		dist[i][i] = 0;
	}

	for (let i = 0; i < original.length; i++) {
		const u = original[i].charCodeAt(0) - offset;
		const v = changed[i].charCodeAt(0) - offset;

		if (dist[u][v] > cost[i]) {
			dist[u][v] = cost[i];
		}
	}

	for (let s = 0; s < alphabet.length; s++) {
		for (let i = 0; i < alphabet.length; i++) {
			for (let j = 0; j < alphabet.length; j++) {
				if (dist[i][j] > dist[i][s] + dist[s][j]) {
					dist[i][j] = dist[i][s] + dist[s][j];
				}
			}
		}
	}

	let totalChangeCost = 0;

	for (let i = 0; i < source.length; i++) {
		const u = source.charCodeAt(i) - offset;
		const v = target.charCodeAt(i) - offset;

		if (dist[u][v] === Infinity) return -1;

		totalChangeCost += dist[u][v];
	}

	return totalChangeCost;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const source = "abcd",
		target = "acbe",
		original = ["a", "b", "c", "c", "e", "d"],
		changed = ["b", "c", "b", "e", "b", "e"],
		cost = [2, 5, 5, 1, 2, 20];

	const $result = minimumCost(source, target, original, changed, cost);
	const $expect = 28;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const source = "aaaa",
		target = "bbbb",
		original = ["a", "c"],
		changed = ["c", "b"],
		cost = [1, 2];

	const $result = minimumCost(source, target, original, changed, cost);
	const $expect = 12;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const source = "abcd", target = "abce", original = ["a"], changed = ["e"], cost = [10000];

	const $result = minimumCost(source, target, original, changed, cost);
	const $expect = -1;

	assertEquals($result, $expect);
});
