import sys
from typing import List


class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
        arr.sort()

        minDiff = sys.maxsize
        result = []

        for i in range(len(arr) - 1):
            a = arr[i]
            b = arr[i + 1]

            absDiff = abs(a - b)

            if minDiff > absDiff:
                minDiff = absDiff
                result = []

            if minDiff == absDiff:
                result.append([a, b])

        return result
