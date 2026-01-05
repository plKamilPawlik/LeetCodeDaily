function bestClosingTime(customers: string): number {
	const prefixCustomers = new Array<number>(customers.length + 1);
	prefixCustomers[0] = 0;

	for (let t = 1; t <= customers.length; t++) {
		prefixCustomers[t] = prefixCustomers[t - 1] + (customers[t - 1] === "Y" ? 1 : 0);
	}

	let minPenalty = Infinity;
	let closingTime = 0;

	for (let t = 0; t <= customers.length; t++) {
		const penaltyA = t - prefixCustomers[t];
		const penaltyB = prefixCustomers[customers.length] - prefixCustomers[t];
		const penalty = penaltyA + penaltyB;

		if (minPenalty > penalty) {
			minPenalty = penalty;
			closingTime = t;
		}
	}

	return closingTime;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const customers = "YYNY";

	const $result = bestClosingTime(customers);
	const $expect = 2;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const customers = "NNNNN";

	const $result = bestClosingTime(customers);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const customers = "YYYY";

	const $result = bestClosingTime(customers);
	const $expect = 4;

	assertEquals($result, $expect);
});
