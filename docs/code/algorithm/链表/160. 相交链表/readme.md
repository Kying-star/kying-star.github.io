# 160. 相交链表

[链接](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gwduxex28kj30oi0zo771.jpg" style="zoom:50%;" />

## 思路
如何让不同道路上的人相遇，只要交换他们的道路就好了。

## 代码
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let A = headA
    let B = headB
    while(A != B){
        A == null ? A = headB : A = A.next
        B == null ? B = headA : B = B.next
    }
    return A
};
```
