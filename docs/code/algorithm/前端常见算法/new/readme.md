# 实现new方法
## 思路
 - 创建一个新对象
 - 将构造函数的prototype复制给该对象的_proto_
 - 通过apply将上下文绑定到新对象上，
 - 返回该对象
## 代码
```javascript
function myNew (){
    let res = {}
    let constructor = arguments[0]
    res.__proto__ = constructor.prototype
    constructor.apply(res, [...arguments].slice(1))
    return res
}

function Worker(name , age){
    this.name = name,
    this.age = age
}
Worker.prototype.sayMe = function() {
    console.log(this.name)
}

let a = myNew(Worker,"worker1",114514)
console.log(a.age)
console.log(a.__proto__)
console.log(Worker.prototype)
a.sayMe()
```