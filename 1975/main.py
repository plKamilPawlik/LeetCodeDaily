import math
from typing import List


class Solution:
    def maxMatrixSum(self, matrix: List[List[int]]) -> int:
        M = len(matrix)
        N = len(matrix[0])

        min = int(1e5 + 1)
        neg = 0
        sum = 0

        for m in range(M):
            for n in range(N):
                absv = abs(matrix[m][n])

                if min > absv:
                    min = absv

                if matrix[m][n] < 0:
                    neg += 1

                sum += absv

        return sum - (2 * min if neg & 1 else 0)
