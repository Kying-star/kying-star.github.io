# 98. 验证二叉搜索树(中等)

[](https://leetcode-cn.com/problems/validate-binary-search-tree/)

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gwycatofz1j30qu0n4myh.jpg" style="zoom:50%;" />

## 思路
中序遍历BST，如果出现了逆序，则二叉树不合法。

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
 * @return {boolean}
 */

var isValidBST = function(root) {
    let isVaild = true;
    let pre = -Infinity;
    let isOk = (root) => {
        if(root == null) return
        isOk(root.left)
        console.log(root.val , pre)
        if(root.val <= pre){
            isVaild = false
        }
        pre = root.val
        isOk(root.right)
    }
    isOk(root)
    return isVaild
};
```