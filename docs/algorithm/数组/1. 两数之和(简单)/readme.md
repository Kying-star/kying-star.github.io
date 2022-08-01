# 两数之和
![]()
[链接](https://leetcode.cn/problems/two-sum/)
## 思路
利用 hash 表，每次循环在 hash 表中找 target 和 nums[i] 的差值

## 代码
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length
    let store = new Map()
    for(let i = 0 ; i < len ; i++) {
        let other = target - nums[i]
        if(store.has(other)){
            return [store.get(other) , i]
        }else{
            store.set(nums[i],i)
        }
    }
};
```