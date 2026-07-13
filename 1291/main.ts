function sequentialDigits(low: number, high: number): number[] {
	const sequentials: number[] = [];

	function buildSequentialNumbers(seq: number) {
		const lastDigit = seq % 10;
		if (lastDigit >= 9) return;

		seq *= 10;
		seq += lastDigit + 1;

		buildSequentialNumbers(seq);

		if (seq < low) return;
		if (seq > high) return;

		sequentials.push(seq);
	}

	for (let i = 1; i <= 9; i++) {
		buildSequentialNumbers(i);
	}

	sequentials.sort((a, b) => a - b);

	return sequentials;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const low = 100, high = 300;

	const $result = sequentialDigits(low, high);
	const $expect = [123, 234];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const low = 1000, high = 13000;

	const $result = sequentialDigits(low, high);
	const $expect = [1234, 2345, 3456, 4567, 5678, 6789, 12345];

	assertEquals($result, $expect);
});
