/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  let rootVal = preorder[0];
  let rootValIdx = inorder.indexOf(rootVal)
  let leftInOrder = inorder.slice(0, rootValIdx)
  let rightInOrder = inorder.slice(rootValIdx + 1)
  let preorderIndex = preorder.length;
  for (let i = 0; i < preorder.length; i++) {
    if (rightInOrder.includes(preorder[i])) {
      preorderIndex = i;
      break;
    }
  }
  let leftPreOrder = preorder.slice(1, preorderIndex)
  let rightPreOrder = preorder.slice(preorderIndex)

  let root = new TreeNode(rootVal)
  root.left = buildTree(leftPreOrder, leftInOrder)
  root.right = buildTree(rightPreOrder, rightInOrder)
  return root;
};