function canReach(arr: number[], start: number): boolean {
	const n = arr.length;
	const visited = Array<boolean>(n).fill(false);

	const dfs = (idx: number): void => {
		if (visited[idx]) return;
		else visited[idx] = true;

		const p = idx - arr[idx];
		const q = idx + arr[idx];

		if (p >= 0) dfs(p);
		if (q < n) dfs(q);
	};

	dfs(start);

	for (let i = 0; i < n; i++) {
		if (arr[i] === 0 && visited[i]) return true;
	}

	return false;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const arr = [4, 2, 3, 0, 3, 1, 2], start = 5;

	const $result = canReach(arr, start);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const arr = [4, 2, 3, 0, 3, 1, 2], start = 0;

	const $result = canReach(arr, start);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const arr = [3, 0, 2, 1, 2], start = 2;

	const $result = canReach(arr, start);
	const $expect = false;

	assertEquals($result, $expect);
});
