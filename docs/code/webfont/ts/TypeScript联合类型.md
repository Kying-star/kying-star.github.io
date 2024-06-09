## TypeScript 联合类型

当某个变量可能有多种类型时，需要使用联合类型

```typescript
var val:string|number 
val = 12 
console.log("yaer = "+ val) 
val = "kying-star" 
console.log("pio的 " + val)
```



同样在函数传参里也同样可以使用

```typescript
function sayhi(person: string | number) {
    console.log(person);
}

sayhi('pio')

sayhi(666)
```

