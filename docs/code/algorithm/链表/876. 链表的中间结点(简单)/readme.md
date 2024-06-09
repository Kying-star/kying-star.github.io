# 876. 链表的中间结点

[链接](https://leetcode-cn.com/problems/middle-of-the-linked-list/)
<img src="https://tva1.sinaimg.cn/large/008i3skNly1gwdukkslhfj30oy0sy76u.jpg" style="zoom: 50%;" />

## 思路
快慢指针，快指针走两步，慢指针走一步，快指针走完。慢指针就走到了中点
注意链表本身的奇偶

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
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fast = head
    let slow = head
    while(fast != null && fast.next != null){
        fast = fast.next
        slow = slow.next
        if(fast.next == null){
            return slow
        }
        fast = fast.next
    }
    return slow
};
```