from typing import List


class Solution:
    def minBitwiseArray(self, nums: List[int]) -> List[int]:
        def minBitwiseOR(num: int) -> int:
            if num % 2 == 0:
                return -1

            bit = 1

            while num & bit:
                bit *= 2

            return num - bit // 2

        return list(map(minBitwiseOR, nums))
