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