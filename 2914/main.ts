function minChanges(s: string): number {
	const blocks: string[] = [];
	let changes = 0;

	for (let i = 0; i < s.length; i += 2) {
		blocks.push(s.slice(i, i + 2));
	}

	for (const [a, b] of blocks) {
		if (a !== b) changes++;
	}

	return changes;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "1001";

	const $result = minChanges(s);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "10";

	const $result = minChanges(s);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const s = "0000";

	const $result = minChanges(s);
	const $expect = 0;

	assertEquals($result, $expect);
});
