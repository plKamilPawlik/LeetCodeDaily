function nextBeautifulNumber(n: number): number {
	const maxBeautifulNumber = 1224444;
	const isBeautifulNumber = (x: number): boolean => {
		const digitFrequency = new Array(10).fill(0);

		while (x > 0) {
			digitFrequency[x % 10]++;
			x = Math.floor(x / 10);
		}

		return digitFrequency.every((freq, index) => freq === index || freq === 0);
	};

	for (let x = n + 1; x < maxBeautifulNumber; x++) {
		if (isBeautifulNumber(x)) return x;
	}

	return maxBeautifulNumber;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const n = 1;

	const $result = nextBeautifulNumber(n);
	const $expect = 22;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const n = 1000;

	const $result = nextBeautifulNumber(n);
	const $expect = 1333;

	assertEquals($result, $expect);
});

Deno.test("3", () => {
	const n = 3000;

	const $result = nextBeautifulNumber(n);
	const $expect = 3133;

	assertEquals($result, $expect);
});
