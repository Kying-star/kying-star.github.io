let getter = 'a.b.c[0].d'
let a = { b: { c : [{d : 1}]}}
let getProperty = (getter ,obj) => {
    let options = getter.replace(/\[/ , '.').replace(/\]/ , '.').split('.').filter( e => e != '')
    options.shift()
    console.log(options)
    let res = obj
    options.forEach((e) => {
        res = res[e]
    })
    return res
}
console.log(getProperty(getter,a))  