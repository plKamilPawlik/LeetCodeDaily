function maxProduct(root: TreeNode | null): number {
	const MOD = 1e9 + 7;
	const sums = new Array<number>();

	const dfsSum = (node: TreeNode | null): number => {
		if (node === null) return 0;

		let sum = node.val;
		sum += dfsSum(node.left);
		sum += dfsSum(node.right);

		sums.push(sum);

		return sum;
	};

	const treeSum = dfsSum(root);
	let minDelta = treeSum;

	for (const sum of sums) {
		const delta = Math.abs(treeSum - 2 * sum);

		if (minDelta > delta) {
			minDelta = delta;
		}
	}

	const p1 = ((treeSum - minDelta) / 2) % MOD;
	const p2 = (treeSum - p1) % MOD;

	return (p1 * p2) % MOD;
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
