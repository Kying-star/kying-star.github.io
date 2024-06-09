let Typeof = (variable ,type) => Object.prototype.toString.call(variable) == `[object ${type}]`
let deepclone = (obj) => {
    let clone = {}
    for( key in obj) {
        console.log(key, obj[key])
        if(Typeof(obj[key] ,'object')) {
            clone[key] = deepclone(obj[key])    
        }else if (Typeof(obj[key] ,'Array')){
            clone[key] = Array.from(obj[key])
        }else{
            clone[key] = obj[key]
        }
    }
    return clone
}

let a = { 
    age : 18,
    sayhi : () => console.log('Hello'),
    friends : [1,2,3,4,5,6]
}

let b = deepclone(a)
b.age = 19
b.sayhi = () => console.log('111')
b.friends[0] = 111
console.log(b.age , a.age)
b.sayhi()
a.sayhi()
console.log(b.friends , a.friends)