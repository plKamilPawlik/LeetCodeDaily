function minDeletionSize(strs: string[]): number {
	let deletionCount = 0;

	for (let i = 0; i < strs[0].length; i++) {
		let charCode = strs[0][i].charCodeAt(0);

		for (let j = 1; j < strs.length; j++) {
			if (charCode <= strs[j][i].charCodeAt(0)) {
				charCode = strs[j][i].charCodeAt(0);
			} else {
				deletionCount++;
				break;
			}
		}
	}

	return deletionCount;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const strs = ["cba", "daf", "ghi"];

	const $result = minDeletionSize(strs);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const strs = ["a", "b"];

	const $result = minDeletionSize(strs);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const strs = ["zyx", "wvu", "tsr"];

	const $result = minDeletionSize(strs);
	const $expect = 3;

	assertEquals($result, $expect);
});
