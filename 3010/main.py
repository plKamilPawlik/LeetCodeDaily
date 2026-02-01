from typing import List


class Solution:
    def minimumCost(self, nums: List[int]) -> int:
        base = nums.pop(0)
        nums.sort()

        return base + nums[0] + nums[1]
