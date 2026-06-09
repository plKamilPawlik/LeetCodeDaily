from typing import List


class Solution:
    def maxTotalValue(self, nums: List[int], k: int) -> int:
        n_max = nums[0]
        n_min = nums[0]

        for i in range(1, len(nums)):
            n_max = max(n_max, nums[i])
            n_min = min(n_min, nums[i])

        return k * (n_max - n_min)
