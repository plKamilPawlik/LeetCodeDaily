from typing import List


class Solution:
    def minBitwiseArray(self, nums: List[int]) -> List[int]:
        def minBitwiseOR(num: int) -> int:
            for i in range(1000):
                if (i | (i + 1)) == num:
                    return i

            return -1

        return list(map(minBitwiseOR, nums))
