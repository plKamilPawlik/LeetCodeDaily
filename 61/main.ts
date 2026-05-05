function rotateRight(head: ListNode | null, k: number): ListNode | null {
	if (!head) return null;

	let curr: ListNode | null = head;
	let prev: ListNode | null = null;
	let length = 1;

	while (curr.next) {
		curr = curr?.next;
		length++;
	}

	if (k === 0) return head;

	// close loop
	curr.next = head;
	curr = head;

	for (let i = 0; i < length - (k % length); i++) {
		prev = curr;
		curr = curr!.next;
	}

	// break loop
	prev!.next = null;

	return curr;
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
