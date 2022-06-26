# 手撕数组原生算法（简易版）
## filter
```javascript
Array.prototype.filter = function(fn) {
    let res = []
    console.log(this)
    for (let i = 0; i < this.length; i++) {
        if(fn(this[i])){
            res.push(this[i])
        }
    }
    return res
}
```

## forEach
```javascript
Array.prototype.forEach = function(fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(this[i] , i)
    }
}

```
## map
```javascript
Array.prototype.map = function(fn) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(this[i] , i))
    }
    return res
}

```
## reduce
```javascript
Array.prototype.reduce = function(fn) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        console.log(sum)
        sum = fn(sum , arr[i])
    }
    return sum
}
```