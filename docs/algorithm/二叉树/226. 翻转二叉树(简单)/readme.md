# 226. 翻转二叉树(简单)
[链接](https://leetcode-cn.com/problems/invert-binary-tree/)
![](https://tva1.sinaimg.cn/large/008i3skNly1gwo5nnafpmj30pu0qi3z2.jpg)
## 思路
左右节点反转，再递归
## 代码
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root == null){
        return null
    }
    let temp = root.right
    root.right = root.left
    root.left = temp
    root.right = invertTree(root.right)
    root.left = invertTree(root.left)
    return root
};
```