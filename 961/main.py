from typing import List


class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        uniqueNums = set[int]()

        for num in nums:
            if num in uniqueNums:
                return num
            else:
                uniqueNums.add(num)

        return -1
