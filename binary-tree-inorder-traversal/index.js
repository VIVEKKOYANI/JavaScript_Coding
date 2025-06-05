var inorderTraversal = (root) => {
  const result = [];

  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  };

  inorder(root);
  return result;
};