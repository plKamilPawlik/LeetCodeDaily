class ProductOfNumbers {
	private prefix: number[];
	private size: number;

	constructor() {
		this.prefix = [1];
		this.size = 0;
	}

	add(num: number): void {
		if (num === 0) {
			this.prefix = [1];
			this.size = 0;
		} else {
			this.prefix.push(this.prefix[this.size] * num);
			this.size++;
		}
	}

	getProduct(k: number): number {
		return k > this.size ? 0 : this.prefix[this.size] / this.prefix[this.size - k];
	}
}
