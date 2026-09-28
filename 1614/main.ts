function maxDepth(s: string): number {
	let currDepth = 0;
	let maxDepth = 0;

	for (const c of s) {
		if (c === "(") currDepth++;
		if (c === ")") currDepth--;

		maxDepth = Math.max(maxDepth, currDepth);
	}

	return maxDepth;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "(1+(2*3)+((8)/4))+1";

	const $result = maxDepth(s);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "(1)+((2))+(((3)))";

	const $result = maxDepth(s);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const s = "()(())((()()))";

	const $result = maxDepth(s);
	const $expect = 3;

	assertEquals($result, $expect);
});
