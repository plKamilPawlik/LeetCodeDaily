function maxLevelSum(root: TreeNode | null): number {
	const levels: number[] = [];
	const dfsSum = (node: TreeNode | null, level: number): void => {
		if (node === null) return;

		if (level in levels) {
			levels[level] += node.val;
		} else {
			levels[level] = node.val;
		}

		dfsSum(node.left, level + 1);
		dfsSum(node.right, level + 1);
	};

	dfsSum(root, 0);

	let maxLevelIndex = 0;
	let maxLevelValue = levels[0];

	for (let level = 1; level < levels.length; level++) {
		if (maxLevelValue < levels[level]) {
			maxLevelValue = levels[level];
			maxLevelIndex = level;
		}
	}

	return maxLevelIndex + 1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
