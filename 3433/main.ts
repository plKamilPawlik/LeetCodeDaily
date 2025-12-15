const enum Event {
	MESSAGE = "MESSAGE",
	OFFLINE = "OFFLINE",
}

const enum Users {
	ALL = "ALL",
	HERE = "HERE",
}

function countMentions(numberOfUsers: number, events: string[][]): number[] {
	const mentions = new Array<number>(numberOfUsers).fill(0);
	const offline = new Array<number>(numberOfUsers).fill(0);

	events.sort((a, b) => {
		const timeA = +a[1];
		const timeB = +b[1];

		if (timeA !== timeB) {
			return timeA - timeB;
		} else {
			const orderA = a[0] === Event.MESSAGE ? 0 : 1;
			const orderB = b[0] === Event.MESSAGE ? 0 : 1;

			return orderB - orderA;
		}
	});

	for (const [event, timestamp, users] of events) {
		const clock = +timestamp;

		if (event === Event.MESSAGE) {
			switch (users) {
				case Users.ALL:
					for (let i = 0; i < numberOfUsers; i++) {
						mentions[i]++;
					}
					break;
				case Users.HERE:
					for (let i = 0; i < numberOfUsers; i++) {
						if (offline[i] <= clock) mentions[i]++;
					}
					break;
				default:
					for (const user of users.split(" ")) {
						const idx = +user.slice(2);
						mentions[idx]++;
					}
					break;
			}
		}

		if (event === Event.OFFLINE) {
			offline[+users] = clock + 60;
		}
	}

	return mentions;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const numberOfUsers = 2;
	const events = [
		["MESSAGE", "10", "id1 id0"],
		["OFFLINE", "11", "0"],
		["MESSAGE", "71", "HERE"],
	];

	const $result = countMentions(numberOfUsers, events);
	const $expect = [2, 2];

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const numberOfUsers = 2;
	const events = [
		["MESSAGE", "10", "id1 id0"],
		["OFFLINE", "11", "0"],
		["MESSAGE", "12", "ALL"],
	];

	const $result = countMentions(numberOfUsers, events);
	const $expect = [2, 2];

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const numberOfUsers = 2;
	const events = [["OFFLINE", "10", "0"], ["MESSAGE", "12", "HERE"]];

	const $result = countMentions(numberOfUsers, events);
	const $expect = [0, 1];

	assertEquals($result, $expect);
});
