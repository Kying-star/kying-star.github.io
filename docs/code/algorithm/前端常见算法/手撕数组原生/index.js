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
Array.prototype.forEach = function(fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(this[i] , i)
    }
}

Array.prototype.map = function(fn) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(this[i] , i))
    }
    return res
}

Array.prototype.reduce = function(fn) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        console.log(sum)
        sum = fn(sum , arr[i])
    }
    return sum
}

let arr = [1,2,3,4,5]
console.log((arr.filter(e => e != 1)))
arr.forEach((item , index) => console.log(index,item))
let arr2 = arr.map((item , i) => i)
console.log(arr2)
console.log(arr.reduce(( a , b) => a + b))