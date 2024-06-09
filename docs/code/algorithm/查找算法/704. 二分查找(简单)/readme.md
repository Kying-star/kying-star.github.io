# 704. 二分查找(简单)
![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3esrywo97j20zg0lyq4v.jpg)

## 思路
常规的二分查找，边缘处理为+-1

## 代码
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left= 0,right = nums.length - 1
    while(right >= left){
       mid = Math.ceil((right + left) / 2)
       if(target == nums[mid]){
            return mid
       }else if(target < nums[mid]){
            right = mid - 1
       }else{
            left = mid + 1
       }
    }
    return -1
};

```