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