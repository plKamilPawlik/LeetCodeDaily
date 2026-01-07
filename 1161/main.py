from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        self.levels = list[int]()
        self.dfsSum(root, 0)

        maxLevelValue = root.val
        maxLevelIndex = 0

        for level in range(len(self.levels)):
            if maxLevelValue < self.levels[level]:
                maxLevelValue = self.levels[level]
                maxLevelIndex = level

        return maxLevelIndex + 1

    def dfsSum(self, node: Optional[TreeNode], level: int) -> None:
        if not node:
            return

        if level < len(self.levels):
            self.levels[level] += node.val
        else:
            self.levels.append(node.val)

        self.dfsSum(node.left, level + 1)
        self.dfsSum(node.right, level + 1)
