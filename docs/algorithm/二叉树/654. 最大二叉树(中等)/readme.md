# 654. 最大二叉树
[链接](https://leetcode-cn.com/problems/maximum-binary-tree/)

![](https://tva1.sinaimg.cn/large/008i3skNly1gwnrrl5ppuj30i00jmjs6.jpg)

## 思路
不断递归查找最大元素,然后递归重复这个过程

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let max = -Infinity
    let MaxIndex = 0
    if(nums.length == 0) return null
    console.log(nums)
    for(let i = 0; i < nums.length;i++){
        if(nums[i] > max){
            max = nums[i]
            MaxIndex = i
        }
    }
    let root = new TreeNode(max , null,null)
    root.left = constructMaximumBinaryTree(nums.slice(0,MaxIndex))
    root.right = constructMaximumBinaryTree(nums.slice(MaxIndex + 1,nums.length))
    return root
};
```