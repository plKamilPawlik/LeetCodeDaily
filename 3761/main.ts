function searchGT(arr: number[], val: number): number {
	let p = 0, q = arr.length;

	while (p < q) {
		const mid = (p + q) >> 1;

		if (arr[mid] <= val) {
			p = mid + 1;
		} else {
			q = mid;
		}
	}

	return arr[p];
}

function reverse(num: number): number {
	let rev = 0;

	while (num) {
		rev *= 10;
		rev += num % 10;
		num = Math.floor(num / 10);
	}

	return rev;
}

function minMirrorPairDistance(nums: number[]): number {
	const index = new Map<number, number[]>();
	let minDist = nums.length;

	for (let i = 0; i < nums.length; i++) {
		if (index.has(nums[i])) {
			index.get(nums[i])!.push(i);
		} else {
			index.set(nums[i], [i]);
		}
	}

	for (let i = 0; i < nums.length; i++) {
		const key = reverse(nums[i]);
		const arr = index.get(key);

		if (!arr || arr.at(-1)! <= i) continue;

		const j = searchGT(arr, i);
		minDist = Math.min(minDist, j - i);
	}

	return minDist < nums.length ? minDist : -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const nums = [12, 21, 45, 33, 54];

	const $result = minMirrorPairDistance(nums);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const nums = [120, 21];

	const $result = minMirrorPairDistance(nums);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const nums = [21, 120];

	const $result = minMirrorPairDistance(nums);
	const $expect = -1;

	assertEquals($result, $expect);
});
