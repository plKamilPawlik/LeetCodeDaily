from typing import List


class Solution:
    def longestBalanced(self, nums: List[int]) -> int:
        maxLength = 0

        for i in range(len(nums) - 1):
            odd = set[int]()
            even = set[int]()

            for j in range(i, len(nums)):
                odd.add(nums[j]) if nums[j] & 1 else even.add(nums[j])

                if len(odd) == len(even):
                    maxLength = max(maxLength, j - i + 1)

        return maxLength
