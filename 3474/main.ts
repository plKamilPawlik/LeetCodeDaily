function generateString(str1: string, str2: string): string {
	const n = str1.length;
	const m = str2.length;

	const substr: string[] = new Array(n + m - 1).fill("a");
	const fixed: boolean[] = new Array(n + m - 1).fill(false);

	for (let i = 0; i < n; i++) {
		if (str1[i] !== "T") continue;

		for (let j = i; j < i + m; j++) {
			if (fixed[j] && substr[j] !== str2[j - i]) return "";

			substr[j] = str2[j - i];
			fixed[j] = true;
		}
	}

	for (let i = 0; i < n; i++) {
		if (str1[i] !== "F") continue;

		let flag = false;
		let index = -1;

		for (let j = i + m - 1; j >= i; j--) {
			if (str2[j - i] !== substr[j]) {
				flag = true;
			}

			if (index === -1 && !fixed[j]) {
				index = j;
			}
		}

		if (flag) continue;
		if (index === -1) return "";
		else substr[index] = "b";
	}

	return substr.join("");
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const str1 = "TFTF", str2 = "ab";

	const $result = generateString(str1, str2);
	const $expect = "ababa";

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const str1 = "TFTF", str2 = "abc";

	const $result = generateString(str1, str2);
	const $expect = "";

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const str1 = "F", str2 = "d";

	const $result = generateString(str1, str2);
	const $expect = "a";

	assertEquals($result, $expect);
});
