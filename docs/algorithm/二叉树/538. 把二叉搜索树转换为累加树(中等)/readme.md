# 538. 把二叉搜索树转换为累加树
[链接](https://leetcode-cn.com/problems/convert-bst-to-greater-tree/)
<img src="https://tva1.sinaimg.cn/large/008i3skNly1gwrtll8ebgj30xi0tqtay.jpg" style="zoom:50%;" />

## 思路
二叉搜索树的先左后右的中序遍历为元素的从小到大排序，先右后左的中序遍历为元素的从大到小排序

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

var convertBST = function(root) {
    let sum = 0
    let run = (root) => {
        if(root == null){
            return null
        }
        run(root.right)
        sum += root.val
        root.val = sum
        run(root.left)
    }
    run(root)
    return root
};
```