# 23. 合并K个升序链表
[链接](https://leetcode-cn.com/problems/merge-k-sorted-lists/)
![](https://tva1.sinaimg.cn/large/008i3skNly1gwdkpwu1k3j30oo0o2wfx.jpg)

## 思路
每次往虚拟头节点后插入一个最小的元素
不断更新链表的头节点，直到所有链表清空。

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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr = []
    let res = head = new ListNode(-1,null)
    let min , minIndex
    arr.push(lists[minIndex])
    while(allNull(lists)){
        min = Infinity , minIndex = 0
        for(let j = 0; j < lists.length ; j++){
            if(lists[j] != null && min > lists[j].val){
                min = lists[j].val
                minIndex = j
            }
        }
        head.next = lists[minIndex]
        head = head.next
        lists[minIndex] = lists[minIndex].next
    }
    return res.next
};

let allNull = (lists) => {
    let count = 0;
    for(let i = 0;i < lists.length ; i++){
        if(lists[i] == null){
            count++
        }
    }
    console.log(count , lists.length)
    return count != lists.length
}
```