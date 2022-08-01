# 83. 删除排序链表中的重复元素
![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3trlg0dnqj20p40ncgmu.jpg)
[链接](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/)
## 思路
快慢指针，快指针找到不同的节点，慢指针用于替换
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
var deleteDuplicates = function(head) {
    if(head == null) return null
    let fast = head , slow = head
    let node = head
    while(fast.next){
        console.log(slow.val)
        if(fast.val != fast.next.val){
            slow.next = fast.next
            slow = slow.next
        }
        fast = fast.next
    }
    slow.next = null
    return node
};
```