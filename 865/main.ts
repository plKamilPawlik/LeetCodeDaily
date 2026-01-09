function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
	if (root === null) return null;

	const level = new Map<number, TreeNode[]>();
	const parent = new Map<TreeNode, TreeNode>();
	const queue = <[TreeNode, number][]> [[root, 0]];

	let maxDepth = 0;

	while (queue.length) {
		const [node, depth] = queue.shift()!;

		if (level.has(depth)) {
			level.get(depth)!.push(node);
		} else {
			level.set(depth, [node]);
			maxDepth = Math.max(maxDepth, depth);
		}

		if (node.left) {
			parent.set(node.left, node);
			queue.push([node.left, depth + 1]);
		}

		if (node.right) {
			parent.set(node.right, node);
			queue.push([node.right, depth + 1]);
		}
	}

	const nodes: TreeNode[] = level.get(maxDepth)!;

	while (nodes.length > 1) {
		const batch = nodes.length;
		const next = new Set<TreeNode>();

		for (let i = 0; i < batch; i++) {
			const node = nodes.shift()!;
			next.add(parent.get(node)!);
		}

		nodes.push(...next);
	}

	return nodes[0];
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
