function getDays(date: string): number {
	const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	const mm = Number(date.slice(0, 2));
	const dd = Number(date.slice(3));

	let days = dd;

	for (let month = 0; month < mm - 1; month++) {
		days += monthDays[month];
	}

	return days;
}

function countDaysTogether(
	arriveAlice: string,
	leaveAlice: string,
	arriveBob: string,
	leaveBob: string,
): number {
	const daysAlice = [getDays(arriveAlice), getDays(leaveAlice)];
	const daysBob = [getDays(arriveBob), getDays(leaveBob)];

	const a = Math.max(daysAlice[0], daysBob[0]);
	const b = Math.min(daysAlice[1], daysBob[1]);

	return Math.max(0, 1 + b - a);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19";

	const $result = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob);
	const $expect = 3;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31";

	const $result = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob);
	const $expect = 0;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const arriveAlice = "11-01", leaveAlice = "11-30", arriveBob = "10-01", leaveBob = "12-31";

	const $result = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob);
	const $expect = 30;

	assertEquals($result, $expect);
});
