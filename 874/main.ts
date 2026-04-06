function robotSim(commands: number[], obstacles: number[][]): number {
	const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
	const walls = new Map<number, Set<number>>();

	let x = 0, y = 0, dir = 0, dist = 0;

	for (const [x, y] of obstacles) {
		if (walls.has(x)) {
			walls.get(x)!.add(y);
		} else {
			walls.set(x, new Set([y]));
		}
	}

	for (const command of commands) {
		if (command === -2) dir = (dir + 3) % 4;
		if (command === -1) dir = (dir + 1) % 4;

		if (command <= 0) continue;

		const [dx, dy] = dirs[dir];

		for (let i = 0; i < command; i++) {
			const next_x = x + dx;
			const next_y = y + dy;

			if (walls.get(next_x)?.has(next_y)) break;

			x = next_x;
			y = next_y;
		}

		dist = Math.max(dist, x ** 2 + y ** 2);
	}

	return dist;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const commands = [4, -1, 3], obstacles = []!;

	const $result = robotSim(commands, obstacles);
	const $expect = 25;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const commands = [4, -1, 4, -2, 4], obstacles = [[2, 4]];

	const $result = robotSim(commands, obstacles);
	const $expect = 65;

	assertEquals($result, $expect);
});

Deno.test("Case 3", () => {
	const commands = [6, -1, -1, 6], obstacles = [[0, 0]];

	const $result = robotSim(commands, obstacles);
	const $expect = 36;

	assertEquals($result, $expect);
});
