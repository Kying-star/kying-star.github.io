# 450. 删除二叉搜索树中的节点
[链接](https://leetcode-cn.com/problems/delete-node-in-a-bst/)
<img src="https://tva1.sinaimg.cn/large/008i3skNly1gwxfv2s8ogj30vu0q2go6.jpg" style="zoom:50%;" />

## 思路
借用BST的特点，快速访问到需要删除的节点。
然后针对节点的左右子节点判断情况。
 - 1 -> 没有子节点 ，直接删除（返回null）
 - 2 -> 仅有一个子节点，就用子节点覆盖需删除的节点 （直接返回root.right 或者 root.left )
 - 3 -> 子节点都存在 , 为了保证BST的合法性，需要找到右子树的最小值，替换当前节点 ， 这里需要实现一个获取获取最小值的函数，
得到最小值后，将当前节点的值赋为最小值，然后去删除右子树中的那个最小值节点（肯定是叶子结点），即可。

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
 * @param {number} key
 * @return {TreeNode}
 */
let getMin = (root) => {
    if(root.left == null){
        return root.val
    }
    let min = getMin(root.left)
    return min
}
var deleteNode = function(root, key) {
    if(root == null) return null
    if(key > root.val){
        root.right = deleteNode(root.right , key)
    }else if(key < root.val){
        root.left = deleteNode(root.left , key)
    }else{
       if(root.right == null && root.left == null){
           return null
       }
       if(root.right != null && root.left == null){
           return root.right
       }
       if(root.left != null && root.right == null){
           return root.left
       }
       if(root.left != null && root.left != null){
           let min = getMin(root.right)
           console.log(min)
           root.val = min
           root.right = deleteNode(root.right , min)
       }
    }
    return root
};
```