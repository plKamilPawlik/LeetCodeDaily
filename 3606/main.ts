function validateCoupons(
	code: string[],
	businessLine: string[],
	isActive: boolean[],
): string[] {
	const validCode = new RegExp("^[a-zA-Z0-9_]+$");
	const categories = <Record<string, string[]>> {
		"electronics": [],
		"grocery": [],
		"pharmacy": [],
		"restaurant": [],
	};

	for (let i = 0; i < code.length; i++) {
		if (!isActive[i]) continue;
		if (!validCode.test(code[i])) continue;

		if (Array.isArray(categories[businessLine[i]])) {
			categories[businessLine[i]].push(code[i]);
		}
	}

	const result: string[] = [];

	for (const category in categories) {
		result.push(...categories[category].sort());
	}

	return result;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const code = ["SAVE20", "", "PHARMA5", "SAVE@20"];
	const businessLine = ["restaurant", "grocery", "pharmacy", "restaurant"];
	const isActive = [true, true, true, true];

	const $result = validateCoupons(code, businessLine, isActive);
	const $expect = ["PHARMA5", "SAVE20"];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const code = ["GROCERY15", "ELECTRONICS_50", "DISCOUNT10"];
	const businessLine = ["grocery", "electronics", "invalid"];
	const isActive = [false, true, true];

	const $result = validateCoupons(code, businessLine, isActive);
	const $expect = ["ELECTRONICS_50"];

	assertEquals($result, $expect);
});
