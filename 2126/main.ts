function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
	asteroids.sort((a, b) => a - b);

	for (const asteroid of asteroids) {
		if (mass >= asteroid) mass += asteroid;
		else return false;
	}

	return true;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const mass = 10;
	const asteroids = [3, 9, 19, 5, 21];

	const $result = asteroidsDestroyed(mass, asteroids);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("2", () => {
	const mass = 5;
	const asteroids = [4, 9, 23, 4];

	const $result = asteroidsDestroyed(mass, asteroids);
	const $expect = false;

	assertEquals($result, $expect);
});
