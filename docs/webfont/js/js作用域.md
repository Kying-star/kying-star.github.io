# js作用域
## 块级作用域

>> var定义的变量可以跨块作用域访问到

```javascript
{
    var a = 1;
    console.log(a); // 1
}
console.log(a); // 1
```

> > var定义的变量不能跨函数作用域访问到

```javascript
(function A() {
    var b = 2;
    console.log(b); // 2
})();//自执行等效于A()
	console.log(b); // 报错
```

> > if语句和for语句中用var定义的变量可以在外面访问到
> >
> > > if

```javascript
if(true) {
    var c = 3;
}
console.log(c); // 3
```

> > > for

```javascript
for(var i = 0; i < 4; i++) {
    var d = 5;
};
console.log(i);	// 4   (循环结束i已经是4，所以此处i为4)
console.log(d); // 5
```

> > var定义的变量父子作用域可以互相访问，但let、const不能

```javascript
	{
		var a = 1;
		let b = 2;
		const c = 3;	
		
		{
			console.log(a);		// 1	子作用域可以访问到父作用域的变量
			console.log(b);		// 2	子作用域可以访问到父作用域的变量
			console.log(c);		// 3	子作用域可以访问到父作用域的变量

			var aa = 11;
			let bb = 22;
			const cc = 33;
		}
		
		console.log(aa);	// 11	// 可以跨块访问到子 块作用域 的变量
		// console.log(bb);	// 报错	bb is not defined
		// console.log(cc);	// 报错	cc is not defined
	}
```



## var let const 的区别

> - var定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。
> - let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。
> - const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改。
> - 同一个变量只能使用一种方式声明，不然会报错

> > var
> >

```javascript
{
    var a = 1;
    console.log(a); // 1
}
console.log(a); // 1
```

> > let
>
> 父作用域无法获取子作用域定义的变量

```javascript
{
    let a = 1;
    console.log(a); // 1
}
console.log(a); // a is not defined
```

> 反之可以

```javascript
    let a = 1;
    {console.log(a);} // 1
```

> > const同let

```javascript
{
    const a = 1;
    console.log(a); // 1
}
console.log(a); // a is not defined
```

```javascript
const a = 1;
{console.log(a);} // 1
```

> > 不同声明符号变量重名也会报错