function minSwaps(grid: number[][]): number {
	const rows: [index: number, zeros: number][] = grid.map((row, index) => {
		let zeros = 0;

		for (let i = row.length - 1; row[i] === 0; i--) zeros++;

		return [index, zeros];
	});

	rows.sort((a, b) => a[1] - b[1]);

	if (rows.some(([_, zeros], index) => zeros < index)) return -1;

	rows.sort((a, b) => a[0] - b[0]);
	let swaps = 0;

	for (let i = 0; i < rows.length - 1; i++) {
		const expectZeros = rows.length - i - 1;
		if (rows[i][1] >= expectZeros) continue;

		let swapIdx!: number;

		for (let j = i + 1; j < rows.length; j++) {
			if (rows[j][1] < expectZeros) continue;

			swapIdx = j;
			break;
		}

		while (swapIdx !== i) {
			[rows[swapIdx], rows[swapIdx - 1]] = [rows[swapIdx - 1], rows[swapIdx]];
			swapIdx--;
			swaps++;
		}
	}

	return swaps;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const grid = [
		[0, 0, 1],
		[1, 1, 0],
		[1, 0, 0],
	];

	const $result = minSwaps(grid);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const grid = [
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
	];

	const $result = minSwaps(grid);
	const $expect = -1;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const grid = [
		[1, 0, 0],
		[1, 1, 0],
		[1, 1, 1],
	];

	const $result = minSwaps(grid);
	const $expect = 0;

	assertEquals($result, $expect);
});
