class Robot {
	readonly dirs = ["East", "North", "West", "South"];
	readonly dx = [1, 0, -1, 0];
	readonly dy = [0, 1, 0, -1];

	private dir: number;
	private per: number;
	private x: number;
	private y: number;

	constructor(
		readonly width: number,
		readonly height: number,
	) {
		this.dir = 0;
		this.per = 2 * (width + height - 2);
		this.x = 0;
		this.y = 0;
	}

	step(num: number): void {
		num = num % this.per || this.per;

		while (num) {
			const x = this.x + this.dx[this.dir];
			const y = this.y + this.dy[this.dir];

			if ((x < 0 || x >= this.width) || (y < 0 || y >= this.height)) {
				this.dir += 1;
				this.dir %= 4;
			} else {
				this.x = x;
				this.y = y;
				num--;
			}
		}
	}

	getPos(): number[] {
		return [this.x, this.y];
	}

	getDir(): string {
		return this.dirs[this.dir];
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const robot = new Robot(6, 3);

	robot.step(2);
	robot.step(2);

	assertEquals(robot.getPos(), [4, 0]);
	assertEquals(robot.getDir(), "East");

	robot.step(2);
	robot.step(1);
	robot.step(4);

	assertEquals(robot.getPos(), [1, 2]);
	assertEquals(robot.getDir(), "West");
});
