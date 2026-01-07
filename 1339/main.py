# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    MOD = 1e9 + 7

    def maxProduct(self, root: Optional[TreeNode]) -> int:
        self.sums = list[int]()

        treeSum = self.dfsSum(root)
        minDelta = treeSum

        for sum in self.sums:
            delta = abs(treeSum - 2 * sum)

            if minDelta > delta:
                minDelta = delta

        p1 = ((treeSum - minDelta) / 2) % Solution.MOD
        p2 = (treeSum - p1) % Solution.MOD

        return int((p1 * p2) % Solution.MOD)

    def dfsSum(self, node: Optional[TreeNode]) -> int:
        if not node:
            return 0

        sum = node.val
        sum += self.dfsSum(node.left)
        sum += self.dfsSum(node.right)
        self.sums.append(sum)

        return sum
