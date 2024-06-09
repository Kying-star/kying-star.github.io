# 106. 从中序与后序遍历序列构造二叉树
[](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)
![](https://tva1.sinaimg.cn/large/008i3skNly1gwo6zepn0tj30po0o4mye.jpg)

## 思路
同前序中序复原 ， 变更一下访问的索引值

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(inorder.length == 0){
        return null
    }
    console.log(inorder, postorder)

    let rootValue = postorder[postorder.length - 1]
    let rootIndex = 0;
    for(let i = 0 ; i < inorder.length ; i++){
        if(rootValue == inorder[i]){
            rootIndex = i
        }
    }
    let root = new TreeNode(rootValue,null,null)
    root.left = buildTree(inorder.slice(0,rootIndex), postorder.slice(0,rootIndex))
    root.right = buildTree(inorder.slice(rootIndex + 1 , inorder.length), postorder.slice(rootIndex , postorder.length - 1))
    return root
};
```