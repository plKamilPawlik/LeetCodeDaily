function createBinaryTree(descriptions: number[][]): TreeNode | null {
	const nodes = new Map<number, TreeNode>();
	const isRoot = new Set<number>();

	for (const [parent] of descriptions) {
		const node = new TreeNode(parent);
		nodes.set(parent, node);
		isRoot.add(parent);
	}

	for (const [parent, child, isLeft] of descriptions) {
		const node = nodes.get(parent)!;
		const next = nodes.get(child) || new TreeNode(child);

		if (isLeft) node.left = next;
		else node.right = next;

		isRoot.delete(child);
	}

	for (const root of isRoot) {
		return nodes.get(root)!;
	}

	return null;
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
