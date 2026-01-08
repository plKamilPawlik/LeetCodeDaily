from typing import List


class Solution:
    def maxDotProduct(self, nums1: List[int], nums2: List[int]) -> int:
        l1 = len(nums1)
        l2 = len(nums2)

        dp = [[-1000] * l2 for _ in range(l1)]

        for i in range(l1 - 1, -1, -1):
            for j in range(l2 - 1, -1, -1):
                dp[i][j] = nums1[i] * nums2[j]

                if i < l1 - 1 and j < l2 - 1:
                    dp[i][j] = max(dp[i][j], dp[i][j] + dp[i + 1][j + 1])

                if i < l1 - 1:
                    dp[i][j] = max(dp[i][j], dp[i + 1][j])

                if j < l2 - 1:
                    dp[i][j] = max(dp[i][j], dp[i][j + 1])

        return dp[0][0]
