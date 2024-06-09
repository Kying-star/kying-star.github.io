# 701. 二叉搜索树中的插入操作(中等)

[](https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/)

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gwycztz4r0j30ri0zgtbc.jpg" style="zoom:50%;" />

## 思路
根据BST的特性定位到节点待插入的位置，再插入即可

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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root == null) return new TreeNode(val,null,null)
    console.log(root.val)
    if(root.val > val){
        root.left = insertIntoBST(root.left , val)
    }
    if(root.val < val){
        root.right = insertIntoBST(root.right , val)
    }
    return root
};
```