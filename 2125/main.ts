function numberOfBeams(bank: string[]): number {
	const countDevices = (line: string): number => {
		let count = 0;

		for (const cell of line) if (cell === "1") count++;

		return count;
	};

	const numberOfDevices = bank.map((line) => countDevices(line));
	const validLinesOnly = numberOfDevices.filter((count) => count > 0);

	let countBeams = 0;

	for (let i = 1; i < validLinesOnly.length; i++) {
		countBeams += validLinesOnly[i - 1] * validLinesOnly[i];
	}

	return countBeams;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const bank = ["011001", "000000", "010100", "001000"];

	const $result = numberOfBeams(bank);
	const $expect = 8;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const bank = ["000", "111", "000"];

	const $result = numberOfBeams(bank);
	const $expect = 0;

	assertEquals($result, $expect);
});
