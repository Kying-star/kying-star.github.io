# 选择排序

## 思路

## 代码
```js
let arr = [1,3,4,5,2,7,6,8,11,9,10]


for(let j = 0; j < arr.length; j++){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[j]){
            [arr[i] , arr[j]] =  [arr[j] , arr[i]]
        }
    }
}

console.log(arr)
```