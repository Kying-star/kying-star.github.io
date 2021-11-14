# 142. 环形链表 II
[链接](https://leetcode-cn.com/problems/linked-list-cycle-ii/)

![](https://tva1.sinaimg.cn/large/008i3skNgy1gwdm9ggzmmj30oq0vkq5k.jpg)

## 思路
思路基于141.环形链表，
首先用快慢指针来判断是否是环形。
然后将其中的某一个指针设置为head
再让他们以同样的速率前进，当它们再次相等是指向的节点即位环形起点。
![](https://tva1.sinaimg.cn/large/008i3skNgy1gwdm8hsj9xj30v20o875d.jpg)

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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head
    let slow = head
    let isloop = false
    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
        if(fast == slow){
            isloop = true
            break;
        }
    }
    if(!isloop){
        return null
    }
    fast = head
    while(fast != slow){
        fast = fast.next
        slow = slow.next
    }
    return slow
};
```