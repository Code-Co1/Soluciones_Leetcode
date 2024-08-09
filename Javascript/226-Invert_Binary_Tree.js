// ---------- JAVASCRIPT -----------

// TreeNode = { val: number, left: TreeNode || null, right: TreeNode || null }

// Calling "invertTree" will swap the right and left nodes of "root" and invert
// their inner subtrees, finally returning the root node
var invertTree = function (root) {
  // O(n) time | O(h) space
  // n -> Number of nodes in the tree
  // h -> Tree height: length of the deepest node to the root (Call stack)
  if (!root) return null;

  // Swap left with right and invert right
  const temp = root.left;
  root.left = invertTree(root.right);

  // Swap right with left and invert left
  root.right = invertTree(temp);

  return root;
};
