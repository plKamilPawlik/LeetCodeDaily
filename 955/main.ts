function minDeletionSize(strs: string[]): number {
	const cmpIndex = new Set(Array.from({ length: strs[0].length }, (_, i) => i));
	const cmp = (str1: string, str2: string): boolean => {
		let hasChanged = false;

		loop: for (const idx of cmpIndex) {
			const charCode1 = str1.charCodeAt(idx);
			const charCode2 = str2.charCodeAt(idx);

			switch (Math.sign(charCode2 - charCode1)) {
				case +1:
					break loop;
				case -1:
					cmpIndex.delete(idx);
					hasChanged = true;
			}
		}

		return hasChanged;
	};

	for (let i = 1; i < strs.length; i++) {
		if (cmp(strs[i - 1], strs[i])) i = 0;
	}

	return strs[0].length - cmpIndex.size;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const strs = ["ca", "bb", "ac"];

	const $result = minDeletionSize(strs);
	const $expect = 1;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const strs = ["xc", "yb", "za"];

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
