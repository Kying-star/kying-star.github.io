# 插入排序

## 思路
遍历数组，把元素不断移置首位

## 代码
```js
let arr = [1,3,4,5,2,7,6,8,11,9,10]
let temp
for(let i = 0; i < arr.length; i++){
    for(let j = i; j > 0; j--){{
        if(arr[j] < arr[j - 1]){
            temp = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temp
        }
    }}
}

console.log(arr)
```