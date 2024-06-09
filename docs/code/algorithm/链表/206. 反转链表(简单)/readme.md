# 206. 反转链表
![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3lqgnzqssj210g0p840e.jpg)
[链接](https://leetcode.cn/problems/reverse-linked-list/)
## 思路
利用递归的性质，递归到最深层的节点，然后层层返回，吧每次递归得到的节点放在最深层的节点后面
## 代码
```js
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
var reverseList = function(head) {
    if(head == null || head.next == null){
        return head
    }
    let last = reverseList(head.next)
    head.next.next = head
    head.next = null
    return last
};
```