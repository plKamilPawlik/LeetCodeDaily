function smallestPalindrome(s: string): string {
	const cnt = new Array<number>(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		cnt[s.charCodeAt(i) - 97]++;
	}

	let str_l = "";
	let str_r = "";
	let mid = "";

	for (let i = 0; i < cnt.length; i++) {
		if (cnt[i] === 0) continue;

		const c = String.fromCharCode(i + 97);
		const x = Math.floor(cnt[i] / 2);

		str_l = str_l + c.repeat(x);
		str_r = c.repeat(x) + str_r;

		if (cnt[i] % 2 === 1) mid = c;
	}

	return str_l + mid + str_r;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const s = "z";

	const $result = smallestPalindrome(s);
	const $expect = "z";

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const s = "babab";

	const $result = smallestPalindrome(s);
	const $expect = "abbba";

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const s = "daccad";

	const $result = smallestPalindrome(s);
	const $expect = "acddca";

	assertEquals($result, $expect);
});
