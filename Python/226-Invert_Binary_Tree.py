# ---------- PYTHON 3 -----------

# TreeNode = { val: number, left: TreeNode || null, right: TreeNode || null }

# Calling "invertTree" will swap the right and left nodes of "root" and invert 
# their inner subtrees, finally returning the root node
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # O(n) time | O(h) space
        # n -> Number of nodes in the tree
        # h -> Tree height: length of the deepest node from the root (Call stack)
        if not root: return None

        # Swap left with right and invert right
        temp = root.left
        root.left = self.invertTree(root.right) 

        # Swap right with left and invert left
        root.right = self.invertTree(temp)
        
        return root