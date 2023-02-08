let matrix = [[1,2,3],[4,5,6],[7,8,9]]
let x = 0, y = 0 ;
let res = []
let U = 0
let D = matrix.length - 1
let R = matrix[0].length - 1
let L = 0
while(1){
    while( y <= R) {
        res.push({x , y, c : `1-${U}${D}${R}${L}`})
        y++
    }
    R--
    while( x <= D ) {
        res.push({x , y, c : `2-${U}${D}${R}${L}`})
        x++
    }
    D--
    while( y > L) {
        res.push({x , y, c : `3-${U}${D}${R}${L}`})
        y--
    }
    L++
    while( x > U){
        res.push({x , y, c : `4-${U}${D}${R}${L}`})
        x--
    }
    U++
    if(res.length == matrix.length * matrix[0].length){
        break
    }
    console.log(res)
}
console.log(res)
// 左 y--
// 右 y++
// 下 x++
// 上 x--
