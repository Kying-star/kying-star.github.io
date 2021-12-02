# 700. 二叉搜索树中的搜索(简单)
[链接](https://leetcode-cn.com/problems/search-in-a-binary-search-tree/)
<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwy6e6vltaj30rw0nqq4a.jpg" style="zoom:50%;" />

## 思路
不断更新根节点

## 代码
`````javascript
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
var searchBST = function(root, val) {
    if(root == null) return null

    if(root.val == val){
        return root
    }
    if(root.val > val){
        root = searchBST(root.left , val)
    }else if(root.val < val){
        root = searchBST(root.right , val)
    }
    return root
};
```