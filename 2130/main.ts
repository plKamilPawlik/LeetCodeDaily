function reverse(head: ListNode | null): ListNode | null {
	let prev = head!;
	let curr = head!.next;
	head!.next = null;

	while (curr?.next) {
		const next = curr.next;
		curr!.next = prev;

		prev = curr;
		curr = next;
	}

	curr!.next = prev;

	return curr;
}

function pairSum(head: ListNode | null): number {
	let curr = head;
	let prev = head;
	let size = 0;

	while (curr?.next) {
		curr = curr.next;
		size = size + 1;
	}

	curr = head;
	prev = null;

	for (let i = 0; i < size / 2; i++) {
		prev = curr;
		curr = curr!.next;
	}

	prev!.next = null;

	const reversed = reverse(curr)!;

	console.log(head, reversed);

	return -1;
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

console.log(pairSum(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))));
