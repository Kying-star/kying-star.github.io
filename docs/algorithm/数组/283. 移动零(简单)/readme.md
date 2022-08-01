# 283. 移动零

## 思路
快慢指针，快指针扫整个数组的0，慢指针用于替换
## 代码
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length
    let fast = 0 , slow = 0
    while(fast < len){
        if(nums[fast] != 0){ 
             [ nums[slow] , nums[fast] ] =  [ nums[fast] , nums[slow] ]
             slow++
        }
        fast++
    }
};
```