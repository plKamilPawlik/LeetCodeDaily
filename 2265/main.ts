function averageOfSubtree(root: TreeNode | null): number {
	let ans = 0;

	function dfs(node: TreeNode) {
		let cnt = 1;
		let sum = node.val;

		if (node.left) {
			const [_cnt, _sum] = dfs(node.left);
			cnt += _cnt;
			sum += _sum;
		}

		if (node.right) {
			const [_cnt, _sum] = dfs(node.right);
			cnt += _cnt;
			sum += _sum;
		}

		const avg = Math.floor(sum / cnt);

		if (avg === node.val) ans++;

		return [cnt, sum];
	}

	if (root) dfs(root);

	return ans;
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
