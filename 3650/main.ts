class SimplePriorityQueue {
	private heap: [priority: number, value: number][] = [];

	enqueue(x: [priority: number, value: number]) {
		this.heap.push(x);

		let current = this.size() - 1;

		while (current > 0) {
			const parent = (current - 1) >> 1;

			if (this.cmpf(parent, current) >= 0) {
				this.swap(parent, current);
				current = parent;
			} else break;
		}
	}

	dequeue(): [priority: number, value: number] {
		const head = this.heap[0];
		const last = this.heap.pop()!;

		if (this.heap.length) {
			this.heap[0] = last;

			let current = 0;

			while (true) {
				const p = (current * 2) + 1;
				const q = (current * 2) + 2;
				let next = current;

				if (p < this.size() && this.cmpf(p, next) < 0) next = p;
				if (q < this.size() && this.cmpf(q, next) < 0) next = q;

				if (next === current) break;

				this.swap(next, current);
				current = next;
			}
		}

		return head;
	}

	size(): number {
		return this.heap.length;
	}

	private cmpf(i: number, j: number): number {
		return this.heap[i][0] - this.heap[j][0];
	}

	private swap(i: number, j: number): void {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}
}

function minCost(n: number, edges: number[][]): number {
	const graph = Array.from({ length: n }, () => <[number, number][]> []);

	for (const [u, v, w] of edges) {
		graph[u].push([v, w]);
		graph[v].push([u, w * 2]);
	}

	const dist = new Array(n).fill(Infinity);
	dist[0] = 0;

	const queue = new SimplePriorityQueue();
	queue.enqueue([0, 0]);

	while (queue.size()) {
		const [cost, node] = queue.dequeue();
		if (cost > dist[node]) continue;

		for (const [next, weight] of graph[node]) {
			if (dist[next] > cost + weight) {
				dist[next] = cost + weight;
				queue.enqueue([dist[next], next]);
			}
		}
	}

	return dist[n - 1] < Infinity ? dist[n - 1] : -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 4, edges = [[0, 1, 3], [3, 1, 1], [2, 3, 4], [0, 2, 2]];

	const $result = minCost(n, edges);
	const $expect = 5;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 4, edges = [[0, 2, 1], [2, 1, 1], [1, 3, 1], [2, 3, 3]];

	const $result = minCost(n, edges);
	const $expect = 3;

	assertEquals($result, $expect);
});
