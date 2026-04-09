const MOD = BigInt(1e9 + 7);

function pow(x: bigint, y: bigint): bigint {
	let acc = 1n;

	while (y) {
		if (y & 1n) acc = (acc * x) % MOD;
		x = (x * x) % MOD;
		y = y >> 1n;
	}

	return acc;
}

function xorAfterQueries(nums: number[], queries: number[][]): number {
	const n = nums.length;
	const s = Math.sqrt(n);
	const h = Math.floor(s);

	const groups = Array.from({ length: h }, () => <[number, number, bigint][]> []);
	const differences = new BigInt64Array(n + h);

	for (const [l, r, k, v] of queries) {
		if (k < h) {
			groups[k].push([l, r, BigInt(v)]);
		} else {
			for (let i = l; i <= r; i += k) {
				nums[i] = Number((BigInt(nums[i]) * BigInt(v)) % MOD);
			}
		}
	}

	for (let k = 1; k < h; k++) {
		if (!groups[k].length) continue;
		else differences.fill(1n);

		for (const [l, r, v] of groups[k]) {
			const R = Math.floor((r - l) / k + 1) * k + l;

			differences[l] = (differences[l] * BigInt(v)) % MOD;
			differences[R] = (differences[R] * pow(BigInt(v), MOD - 2n)) % MOD;
		}

		for (let i = k; i < n; i++) {
			differences[i] = (differences[i] * differences[i - k]) % MOD;
		}

		for (let i = 0; i < n; i++) {
			nums[i] = Number((BigInt(nums[i]) * differences[i]) % MOD);
		}
	}

	let xor = nums[0];

	for (let i = 1; i < n; i++) {
		xor ^= nums[i];
	}

	return xor;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [1, 1, 1], queries = [[0, 2, 1, 4]];

	const $result = xorAfterQueries(nums, queries);
	const $expect = 4;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [2, 3, 1, 5, 4], queries = [[1, 4, 2, 3], [0, 2, 1, 2]];

	const $result = xorAfterQueries(nums, queries);
	const $expect = 31;

	assertEquals($result, $expect);
});
