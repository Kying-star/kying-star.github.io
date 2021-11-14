# 19. 删除链表的倒数第 N 个结点

[链接](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwdvahzwwtj30oq0nc75p.jpg" style="zoom:50%;" />

## 思路
假设整个链表长度为k
先找一个先行指针，让这个指针走n步
然后再初始化一个头指针 ， 让这个指针跟跟先行指针一起走
他们就一起走了k-n步
那么就找到了倒数第n个节点

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head
    let res = virtualHead = new ListNode(-1,head)
    for(let i = 0;i < n ;i++){
        fast = fast.next
    }
    while(fast != null){
        fast = fast.next
        virtualHead = virtualHead.next
        console.log(virtualHead)
    }
    virtualHead.next = virtualHead.next.next
    
    return res.next
};
```