# 21. 合并两个有序链表
[链接](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
![](https://tva1.sinaimg.cn/large/008i3skNly1gwdklpbmzyj30pg0psjt2.jpg)

## 思路
比较大小进行归并排序，需要注意一下null值的判空

## 代码
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let res = head = new ListNode(-1,null)
    while(l1 || l2){
        if(l1 == null){
            head.next = l2
            l2 = l2.next
        }
        else if(l2 == null){
            head.next = l1
            l1 = l1.next
        }
        else if(l1.val > l2.val){
            head.next = l2
            l2 = l2.next
        }else{
            head.next = l1
            l1 = l1.next
        }
        head = head.next
    }
    return res.next
};
```