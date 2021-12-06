# 146. LRU 缓存机制(中等)

[](https://leetcode-cn.com/problems/lru-cache/)
<img src="https://tva1.sinaimg.cn/large/008i3skNly1gwzup571x8j30u00w9tcn.jpg" style="zoom:50%;" />

## 思路
利用map数据结构，完成map的按键删除

## 代码
```javascript
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map()
    this.size = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map.has(key)){
        const res = this.map.get(key)
        this.map.delete(key)
        this.map.set(key,res)
        return res
    }else{
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)){
        this.map.delete(key)
    }
    this.map.set(key,value)
    if(this.map.size  > this.size){
        this.map.delete(this.map.keys().next().value)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```