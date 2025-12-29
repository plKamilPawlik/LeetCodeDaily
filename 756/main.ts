function pyramidTransition(bottom: string, allowed: string[]): boolean {
	const map = new Map<string, string[]>();

	for (const scheme of allowed) {
		const key = scheme.slice(0, 2);

		if (map.has(key)) {
			map.get(key)!.push(scheme[2]);
		} else {
			map.set(key, [scheme[2]]);
		}
	}

	const dfs = (prev: string, next: string, idx: number): boolean => {
		if (prev.length === 1) return true;

		if (idx === prev.length - 1) {
			return dfs(next, "", 0);
		}

		const key = prev.slice(idx, idx + 2);

		for (const top of map.get(key) || []) {
			next = next.concat(top);

			if (dfs(prev, next, idx + 1)) return true;

			next = next.slice(0, -1);
		}

		return false;
	};

	return dfs(bottom, "", 0);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("Case 1", () => {
	const bottom = "BCD";
	const allowed = ["BCC", "CDE", "CEA", "FFF"];

	const $result = pyramidTransition(bottom, allowed);
	const $expect = true;

	assertEquals($result, $expect);
});

Deno.test("Case 2", () => {
	const bottom = "AAAA";
	const allowed = ["AAB", "AAC", "BCD", "BBE", "DEF"];

	const $result = pyramidTransition(bottom, allowed);
	const $expect = false;

	assertEquals($result, $expect);
});
