function countTriples(n: number): number {
	let triples = 0;

	for (let a = 1; a <= n; a++) {
		for (let b = 1; b <= n; b++) {
			for (let c = 1; c <= n; c++) {
				if (a ** 2 + b ** 2 === c ** 2) triples++;
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
