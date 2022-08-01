# 167. 两数之和 II - 输入有序数组
![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3ss1wq0boj20pc0q0q5u.jpg)
[链接](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/)
## 思路
双指针，判断数组最大项和最小项之和，然后依次往内收缩。

## 代码
```javascript
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0 , right = numbers.length - 1
    let len = numbers.length
    for(let i = 0 ; i < len ; i++) {
        let sum = numbers[left] + numbers[right]
        if(sum > target){
            right--
        }else if(sum < target){
            left++
        }else{
            return [left + 1, right + 1]
        }
    }

};
```