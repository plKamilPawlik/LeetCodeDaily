function minJumps(arr: number[]): number {
	if (arr.length <= 1) return 0;

	const n = arr.length;
	const graph = new Map<number, number[]>();
	const queue = new Array<number>(1).fill(0);
	const visited = new Array<boolean>(n).fill(false);
	visited[0] = true;

	for (let i = 0; i < arr.length; i++) {
		if (graph.has(arr[i])) {
			graph.get(arr[i])!.push(i);
		} else {
			graph.set(arr[i], [i]);
		}
	}

	let steps = 0;

	while (queue.length) {
		const size = queue.length;

		for (let i = 0; i < size; i++) {
			const idx = queue.shift()!;

			if (idx === arr.length - 1) return steps;

			if (idx - 1 >= 0 && !visited[idx - 1]) {
				visited[idx - 1] = true;
				queue.push(idx - 1);
			}

			if (idx + 1 < n && !visited[idx + 1]) {
				visited[idx + 1] = true;
				queue.push(idx + 1);
			}

			for (const j of graph.get(arr[idx])!) {
				if (visited[j]) continue;

				visited[j] = true;
				queue.push(j);
			}

			graph.set(arr[idx], []);
		}

		steps++;
	}

	return -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const arr = [100, -23, -23, 404, 100, 23, 23, 23, 3, 404];

	const $result = minJumps(arr);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const arr = [7];

	const $result = minJumps(arr);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const arr = [7, 6, 9, 6, 9, 6, 9, 7];

	const $result = minJumps(arr);
	const $expect = 1;

	assertEquals($result, $expect);
});
