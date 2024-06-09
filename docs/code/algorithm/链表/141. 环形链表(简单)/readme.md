# 141. 环形链表

[链接](https://leetcode-cn.com/problems/linked-list-cycle/)

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gwdv0zdrfdj30p20xiacv.jpg" style="zoom:50%;" />

## 思路
快慢指针问题，可以想像成长跑，在环形的赛道上，比你跑的快的人肯定会超你一圈，在直道上，你肯定碰不到比你跑的快的人。

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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head
    let slow = head
    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            return true
        }
    }
    return false
};
```