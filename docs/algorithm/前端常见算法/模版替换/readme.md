# 模版替换

```js
let str = 'hi {{name}}'
let obj = { name: 'lqx'}

let tempReplace = (str , obj) => {
    Object.keys(obj).forEach((key) => { 
        str = str.replace(/\{\{\w*\}\}/g,obj[key])
    // str.replace(/\{\{\w*\}\}/g,obj[key])
    })
    return str
}

```