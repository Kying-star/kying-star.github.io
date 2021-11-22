# 105. 从前序与中序遍历序列构造二叉树(中等)

[链接](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

![](https://tva1.sinaimg.cn/large/008i3skNly1gwo22xi9kmj30g00ibaas.jpg)

## 思路

通过前序遍历知道树的根结点，然后遍历中序数组，分割得到子树
再去递归这个过程

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length == 0){
        return null
    }
    if(inorder.length == 0){
        return null
    }
    console.log(preorder, inorder)
    let rootValue = preorder[0]
    let rootIndex = 0;
    for(let i = 0 ; i < inorder.length ; i++){
        if(rootValue == inorder[i]){
            rootIndex = i
        }
    }
    let root = new TreeNode(rootValue,null,null)
    root.left = buildTree(preorder.slice(1,rootIndex + 1),inorder.slice(0,rootIndex))
    root.right = buildTree(preorder.slice(rootIndex + 1, preorder.length),inorder.slice(rootIndex + 1 , inorder.length))
    return root
};
```