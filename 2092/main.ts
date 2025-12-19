class DisjointSet {
	private parent: number[];

	constructor(n: number) {
		this.parent = Array.from({ length: n }, (_, i) => i);
	}

	find(node: number): number {
		if (this.parent[node] !== node) {
			this.parent[node] = this.find(this.parent[node]);
		}

		return this.parent[node];
	}

	join(nodeA: number, nodeB: number): void {
		this.parent[this.find(nodeB)] = this.find(nodeA);
	}

	self(node: number): void {
		this.parent[node] = node;
	}
}

function findAllPeople(n: number, meetings: number[][], firstPerson: number): number[] {
	meetings.sort((a, b) => a[2] - b[2]);

	const ds = new DisjointSet(n);
	ds.join(0, firstPerson);

	for (let i = 0; i < meetings.length;) {
		const currentTime = meetings[i][2];
		const participants = new Set<number>();

		while (meetings[i] && meetings[i][2] === currentTime) {
			const [x, y, _] = meetings[i];

			ds.join(x, y);
			participants.add(x);
			participants.add(y);
			i++;
		}

		const root = ds.find(0);

		for (const p of participants) {
			if (ds.find(p) !== root) ds.self(p);
		}
	}

	return Array.from({ length: n }, (_, i) => i).filter((_, i) => ds.find(i) === ds.find(0));
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 6, meetings = [[1, 2, 5], [2, 3, 8], [1, 5, 10]], firstPerson = 1;

	const $result = findAllPeople(n, meetings, firstPerson);
	const $expect = [0, 1, 2, 3, 5];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 4, meetings = [[3, 1, 3], [1, 2, 2], [0, 3, 3]], firstPerson = 3;

	const $result = findAllPeople(n, meetings, firstPerson);
	const $expect = [0, 1, 3];

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = 5, meetings = [[3, 4, 2], [1, 2, 1], [2, 3, 1]], firstPerson = 1;

	const $result = findAllPeople(n, meetings, firstPerson);
	const $expect = [0, 1, 2, 3, 4];

	assertEquals($result, $expect);
});
