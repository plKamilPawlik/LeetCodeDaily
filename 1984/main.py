from typing import List


class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        nums.sort()

        diff = nums[-1]

        for i in range(len(nums) - k + 1):
            diff = min(diff, nums[i + k - 1] - nums[i])

        return diff
