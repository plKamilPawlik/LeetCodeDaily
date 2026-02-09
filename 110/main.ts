function isBalanced(root: TreeNode | null): boolean {
	let maxInbalance = 0;

	const dfs = (node: TreeNode | null): number => {
		if (!node) return 0;

		const depthL = dfs(node.left);
		const depthR = dfs(node.right);

		if (maxInbalance < Math.abs(depthL - depthR)) {
			maxInbalance = Math.abs(depthL - depthR);
		}

		return 1 + Math.max(depthL, depthR);
	};

	dfs(root);

	return maxInbalance < 2;
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
