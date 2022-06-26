# 函数柯里化（ es6版本 ）
```javascript
let curry = (fn,...args) => 
    fn.length <= args.length ? fn(...args) :(..._args) =>  curry(fn, ...args , ..._args)


let add = (a , b , c , d , e) =>{
    console.log(1)
    console.log(a , b , c , d , e)
    return a + b + c + d + e
}

let _add = curry(add)
console.log(_add(1,2,3)(4,5)) // 15
```