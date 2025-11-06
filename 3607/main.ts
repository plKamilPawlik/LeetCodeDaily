class UnionFind {
	parent: number[];

	constructor(public size: number) {
		this.parent = Array.from({ length: size }).map((_, i) => i);
	}

	find(i: number): number {
		if (this.parent[i] !== i) {
			this.parent[i] = this.find(this.parent[i]);
		}

		return this.parent[i];
	}

	join(i: number, j: number): void {
		this.parent[this.find(j)] = this.find(i);
	}
}

function processQueries(c: number, connections: number[][], queries: number[][]): number[] {
	const dsu = new UnionFind(c + 1);

	connections.forEach(([u, v]) => dsu.join(u, v));

	const isOnline = new Array<boolean>(c + 1).fill(true);
	const offlineCount = new Array<number>(c + 1).fill(0);
	const minOnlineSubstations = new Map<number, number>();

	for (const [opCode, id] of queries) {
		if (opCode === 2) {
			isOnline[id] = false;
			offlineCount[id]++;
		}
	}

	for (let i = 1; i <= c; i++) {
		const root = dsu.find(i);

		if (!minOnlineSubstations.has(root)) {
			minOnlineSubstations.set(root, -1);
		}

		const station = minOnlineSubstations.get(root)!;

		if (isOnline[i] && (station === -1 || station > i)) {
			minOnlineSubstations.set(root, i);
		}
	}

	const ans: number[] = [];

	for (const [opCode, id] of queries.reverse()) {
		const root = dsu.find(id);
		const station = minOnlineSubstations.get(root)!;

		if (opCode === 1) {
			if (isOnline[id]) {
				ans.push(id);
			} else {
				ans.push(station);
			}
		}

		if (opCode === 2) {
			if (offlineCount[id] > 1) {
				offlineCount[id]--;
			} else {
				isOnline[id] = true;
				if (station === -1 || station > id) {
					minOnlineSubstations.set(root, id);
				}
			}
		}
	}

	return ans.reverse();
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const c = 5;
	const connections = [[1, 2], [2, 3], [3, 4], [4, 5]];
	const queries = [[1, 3], [2, 1], [1, 1], [2, 2], [1, 2]];

	const $result = processQueries(c, connections, queries);
	const $expect = [3, 2, 3];

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const c = 3;
	const connections = [] as number[][];
	const queries = [[1, 1], [2, 1], [1, 1]];

	const $result = processQueries(c, connections, queries);
	const $expect = [1, -1];

	assertEquals($result, $expect);
});
