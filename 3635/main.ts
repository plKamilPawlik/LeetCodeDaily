interface Ride {
	t0: number;
	dt: number;
}

function calculateFinishTime(
	rideA: Ride[],
	rideB: Ride[],
): number {
	let t1 = Infinity;

	for (const ride of rideA) {
		t1 = Math.min(t1, ride.t0 + ride.dt);
	}

	let t2 = Infinity;

	for (const ride of rideB) {
		t2 = Math.min(t2, Math.max(ride.t0, t1) + ride.dt);
	}

	return t2;
}

function earliestFinishTime(
	landStartTime: number[],
	landDuration: number[],
	waterStartTime: number[],
	waterDuration: number[],
): number {
	const rideLand: Ride[] = Array.from({ length: landDuration.length }, (_, i) => ({
		t0: landStartTime[i],
		dt: landDuration[i],
	}));

	const rideWater: Ride[] = Array.from({ length: waterDuration.length }, (_, i) => ({
		t0: waterStartTime[i],
		dt: waterDuration[i],
	}));

	const t1 = calculateFinishTime(rideLand, rideWater);
	const t2 = calculateFinishTime(rideWater, rideLand);

	return Math.min(t1, t2);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const landStartTime = [2, 8],
		landDuration = [4, 1],
		waterStartTime = [6],
		waterDuration = [3];

	const $result = earliestFinishTime(
		landStartTime,
		landDuration,
		waterStartTime,
		waterDuration,
	);
	const $expect = 9;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const landStartTime = [5],
		landDuration = [3],
		waterStartTime = [1],
		waterDuration = [10];

	const $result = earliestFinishTime(
		landStartTime,
		landDuration,
		waterStartTime,
		waterDuration,
	);
	const $expect = 14;

	assertEquals($result, $expect);
});
