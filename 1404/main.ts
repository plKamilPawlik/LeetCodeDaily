function numSteps(s: string): number {
	const bits = s.split("").reverse();

	const plusOne = (): void => {
		let carry = true;

		for (let i = 0; i < bits.length && carry; i++) {
			if (bits[i] === "1") {
				bits[i] = "0";
			} else {
				bits[i] = "1";
				carry = false;
			}
		}

		if (carry) bits.push("1");
	};

	let steps = 0;

	while (bits.length > 1) {
		if (bits[0] === "1") plusOne();
		else bits.shift();

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
