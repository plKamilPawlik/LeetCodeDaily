function isValid(s: string): boolean {
	const stack: string[] = [];

	const closingBrackets = [")", "]", "}"];
	const openingBrackets = ["(", "[", "{"];

	for (const c of s) {
		if (closingBrackets.includes(c)) {
			const last = stack[stack.length - 1];

			const idx_1 = closingBrackets.indexOf(c);
			const idx_2 = openingBrackets.indexOf(last);

			if (idx_1 !== idx_2) return false;

			stack.pop();
		} else {
			stack.push(c);
		}
	}

	return stack.length === 0;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "()";

	const $result = isValid(s);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "()[]{}";

	const $result = isValid(s);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const s = "(]";

	const $result = isValid(s);
	const $expect = false;

	assertEquals($result, $expect);
});

Deno.test("Case 4", () => {
	const s = "([])";

	const $result = isValid(s);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 5", () => {
	const s = "([)]";

	const $result = isValid(s);
	const $expect = false;

	assertEquals($result, $expect);
});
