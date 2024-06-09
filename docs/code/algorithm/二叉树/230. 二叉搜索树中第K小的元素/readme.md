# 230. 二叉搜索树中第K小的元素
[](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/)
![](https://tva1.sinaimg.cn/large/008i3skNly1gwo8scprsuj30wu0u0wfz.jpg)
## 思路
二叉搜索树的中序遍历结果就是数组的从小到大排序
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
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(root, k) {
    let depth = 0
    let res = 0
    let trevel = (root) => {
        if(root == null){
            return null
        }
        trevel(root.left)
        depth++
        if(depth == k) {
            res = root.val 
        }
        trevel(root.right)
    }
    trevel(root)
    return res
};
```