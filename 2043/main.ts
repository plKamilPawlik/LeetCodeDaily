class Bank {
	constructor(private readonly balance: number[]) {}

	transfer(account1: number, account2: number, money: number): boolean {
		if (!this.isValidAccountID(account1)) return false;
		if (!this.isValidAccountID(account2)) return false;

		if (this.$(account1) < money) return false;

		this.$(account1, (v) => v - money);
		this.$(account2, (v) => v + money);

		return true;
	}

	deposit(account: number, money: number): boolean {
		if (!this.isValidAccountID(account)) return false;

		this.$(account, (v) => v + money);

		return true;
	}

	withdraw(account: number, money: number): boolean {
		if (!this.isValidAccountID(account) || this.$(account) < money) return false;

		this.$(account, (v) => v - money);

		return true;
	}

	private isValidAccountID(number: number): boolean {
		return number > 0 && number <= this.balance.length;
	}

	private $(account: number, op?: (founds: number) => number): number {
		if (op) this.balance[account - 1] = op(this.balance[account - 1]);
		return this.balance[account - 1];
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

import { assertEquals } from "@std/assert";

Deno.test("1", () => {
	const bank = new Bank([10, 100, 20, 50, 30]);

	assertEquals(bank.withdraw(3, 10), true);
	assertEquals(bank.transfer(5, 1, 20), true);
	assertEquals(bank.deposit(5, 20), true);
	assertEquals(bank.transfer(3, 4, 15), false);
	assertEquals(bank.withdraw(10, 50), false);
});
