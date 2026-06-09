func maxTotalValue(nums []int, k int) int64 {
	n_max := nums[0]
	n_min := nums[0]

	for i := 1; i < len(nums); i++ {
		n_max = max(n_max, nums[i])
		n_min = min(n_min, nums[i])
	}

	return int64(k * (n_max - n_min))
}
