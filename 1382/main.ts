function balanceBST(root: TreeNode | null): TreeNode | null {
	const list: TreeNode[] = [];

	const dfs = (node: TreeNode | null): void => {
		if (!node) return;

		dfs(node.left);
		list.push(node);
		dfs(node.right);
	};

	dfs(root);

	const build = (p: number, q: number): TreeNode | null => {
		if (p > q) return null;

		const idx = (p + q) >> 1;
		const node = list[idx];

		node.left = build(p, idx - 1);
		node.right = build(idx + 1, q);

		return node;
	};

	return build(0, list.length - 1);
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
