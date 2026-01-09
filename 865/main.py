from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def subtreeWithAllDeepest(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None

        levels = list[list[TreeNode]]()
        parent = dict[TreeNode, TreeNode]()

        queue = [(root, 0)]

        while len(queue) > 0:
            node, depth = queue.pop(0)

            if len(levels) > depth:
                levels[depth].append(node)
            else:
                levels.append([node])

            if node.left:
                parent[node.left] = node
                queue.append((node.left, depth + 1))

            if node.right:
                parent[node.right] = node
                queue.append((node.right, depth + 1))

        nodes = levels[-1]

        while len(nodes) > 1:
            next = set[TreeNode]()

            for _ in range(len(nodes)):
                node = nodes.pop(0)
                next.add(parent[node])

            nodes = list(next)

        return nodes[0]
