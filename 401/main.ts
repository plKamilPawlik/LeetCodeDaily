function readBinaryWatch(turnedOn: number): string[] {
	const result = <string[]> [];
	const n_bits = Array.from({ length: 60 }, (_, i) => {
		let c = 0;

		while (i) {
			c += i & 1;
			i = i >> 1;
		}

		return c;
	});

	for (let h = 0; h < 12; h++) {
		for (let m = 0; m < 60; m++) {
			if (n_bits[h] + n_bits[m] === turnedOn) {
				result.push(`${h}:${m.toString().padStart(2, "0")}`);
			}
		}
	}

	return result;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertArrayIncludes } from "@std/assert";

Deno.test("Case 1", () => {
	const turnedOn = 1;

	const $result = readBinaryWatch(turnedOn);
	const $expect = [
		"0:01",
		"0:02",
		"0:04",
		"0:08",
		"0:16",
		"0:32",
		"1:00",
		"2:00",
		"4:00",
		"8:00",
	];

	assertArrayIncludes($result, $expect);
});

Deno.test("Case 2", () => {
	const turnedOn = 9;

	const $result = readBinaryWatch(turnedOn);
	const $expect = <string[]> [];

	assertArrayIncludes($result, $expect);
});
