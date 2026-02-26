function numSteps(s: string): number {
	const b = [...s].reverse();

	const plusOne = () => {
		let carry = true;

		for (let i = 0; i < b.length && carry; i++) {
			if (b[i] === "1") {
				b[i] = "0";
			} else {
				b[i] = "1";
				carry = false;
			}
		}

		if (carry) b.push("1");
	};

	let steps = 0;

	while (b.length > 1) {
		if (b[0] === "1") plusOne();
		else b.shift();

		steps++;
	}

	return steps;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "1101";

	const $result = numSteps(s);
	const $expect = 6;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "10";

	const $result = numSteps(s);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const s = "1";

	const $result = numSteps(s);
	const $expect = 0;

	assertEquals($result, $expect);
});
