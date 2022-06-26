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