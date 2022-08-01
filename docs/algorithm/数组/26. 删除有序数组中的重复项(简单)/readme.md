# 26. 删除有序数组中的重复项
![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3swpapnwoj20oq0gkmze.jpg)
[链接](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)

## 思路
快慢指针，快指针扫整个数组，慢指针负责替换前几项

## 代码
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let fast = 1 , slow = 1 , len = nums.length
    if(len == 0) return
    while(fast < len) {
        // console.log(nums)
        if(nums[fast] != nums[fast - 1]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};
```