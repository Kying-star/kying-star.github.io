# 114. 二叉树展开为链表(中等)

#### [链接](https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/)

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gwo54l7mazj30p80sitaq.jpg" style="zoom:50%;" />

## 思路

后序遍历，缓存便利到的节点的左右子节点，然后交换左右节点位置，再把缓存的右节点放在新的右节点之后

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    // base case
    if (root == null) return;
    flatten(root.left);
    flatten(root.right);

    let left = root.left;
    let right = root.right;

    root.left = null;
    root.right = left;

    let p = root
    while(p.right){
        p = p.right
    }
    p.right = right
};
```