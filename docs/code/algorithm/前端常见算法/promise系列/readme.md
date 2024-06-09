# 整理常见的 promise 算法
## promiseALL
```javascript
let promiseALL = (proList) => {
    return new Promise((resolve, reject) => {
        let res = []
        let count = 0
        proList.map((item,index) => {
            item.then((e) => {
                res[index] = e
                count++
                if(count === proList.length){
                    resolve(res)
                }
            }).catch(() => reject(new Error("出现错误")))
        })
    })
}

let p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject(1)
    },3000)
})

let p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(2)
    } , 100)
})

let p3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(3)
    } , 200)
})
promiseALL([p1, p2, p3]).then(console.log)
```

## promiseRace 
```javascript
let promiseRace = (promiseList) => {
    return new Promise((resolve, reject) => {
        promiseList.map((promise) => promise.then(resolve).catch(reject))
    })
}

let p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(1)
    },3000)
})

let p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject(new Error('help'))
    } , 100)
})

let p3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(3)
    } , 200)
})

promiseRace([p1, p2, p3]).then(console.log)
```
## promise.resolve() & promise.reject()
```javascript
let promiseResolve = (promise) => {
    return new Promise((resolve, reject) => {
        if(promise instanceof Promise){
            promise.then(resolve, reject)
        }else {
            resolve(promise)
        }
    })
}

let promiseReject = (promise) => {
    return new Promise((resolve, reject) => {
        reject(promise)
    })
}

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(1)
    },2000)
})
promiseResolve(p1).then(e => e.then(console.log))
promiseReject(p1).catch(e => e.catch(console.log))
```