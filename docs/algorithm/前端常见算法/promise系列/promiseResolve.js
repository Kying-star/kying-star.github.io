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