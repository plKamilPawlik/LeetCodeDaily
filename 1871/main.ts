function canReach(s: string, minJump: number, maxJump: number): boolean {
	const n = s.length;
	const prefix = new Array<number>(n).fill(0);
	const visited = new Array<boolean>(n).fill(false);
	visited[0] = true;

	for (let i = 0; i < minJump; i++) {
		prefix[i] = 1;
	}

	for (let i = minJump; i < n; i++) {
		const p = i - maxJump;
		const q = i - minJump;

		if (s[i] === "0") {
			visited[i] = prefix[q] !== (p <= 0 ? 0 : prefix[p - 1]);
		}

		prefix[i] = prefix[i - 1] + (visited[i] ? 1 : 0);
	}

	return visited[n - 1];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "011010", minJump = 2, maxJump = 3;

	const $result = canReach(s, minJump, maxJump);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "01101110", minJump = 2, maxJump = 3;

	const $result = canReach(s, minJump, maxJump);
	const $expect = false;

	assertEquals($result, $expect);
});
