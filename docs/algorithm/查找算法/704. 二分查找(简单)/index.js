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

console.log(search([2,5],2))