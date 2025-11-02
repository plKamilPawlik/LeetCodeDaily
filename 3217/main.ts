function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
	const uniqueNums = new Set(nums);
	const root = new ListNode(NaN, head);

	let node = root;

	while (node.next) {
		if (uniqueNums.has(node.next.val)) {
			node.next = node.next.next;
		} else {
			node = node.next;
		}
	}

	return root.next;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
