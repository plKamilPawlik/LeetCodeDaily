function countTriples(n: number): number {
	const c2max = n ** 2;
	let triples = 0;

	for (let a = 1; a <= n; a++) {
		for (let b = 1; b <= n; b++) {
			const a2 = a ** 2;
			const b2 = b ** 2;

			if (a2 + b2 > c2max) continue;

			const sqrt = Math.sqrt(a2 + b2);

			if (Number.isInteger(sqrt)) {
				triples++;
			}
		}
	}

	return triples;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const n = 5;

	const $result = countTriples(n);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const n = 10;

	const $result = countTriples(n);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const n = 12;

	const $result = countTriples(n);
	const $expect = 4;

	assertEquals($result, $expect);
});
