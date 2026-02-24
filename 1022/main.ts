function sumRootToLeaf(root: TreeNode | null): number {
	let sum = 0;

	(function dfs(node: TreeNode | null, acc = 0): void {
		if (!node) return;

		acc *= 2;
		acc += node.val;

		if (node.left || node.right) {
			dfs(node.left, acc);
			dfs(node.right, acc);
		} else {
			sum += acc;
		}
	})(root);

	return sum;
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
