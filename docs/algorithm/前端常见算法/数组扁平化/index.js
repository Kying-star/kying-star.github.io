let flatten = (arr) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] instanceof Array){
            res = flatten([...res,...arr[i]])
        }else {
            res.push(arr[i])
        }
    }
    return res
}

let flattenByReduce = (arr) => {
    return arr.reduce((a , b) => {
        return  a.concat(b instanceof Array ? flatten(b) : b)
    },[])
}

let arr = [1,2,[3,4,[5,6]]]

console.log(flattenByReduce(arr))
