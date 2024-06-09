## 泛型

讲述泛型前让我们先看一个例子

```typescript
function pioNeed(sth: string) {
    console.log(`pio want ${sth}`);
}
```

这个函数的作用是打印出pio想要的东西

但是很多时候pio想要的不只是string可能是 number	

```typescript
function pioNeed(sth: number) {
    console.log(`pio want ${sth}`);
}
```

这样我们就要费时间再写函数了，会让pio担心的，这是我们不想看到的。

那该怎么办呢？泛型帮助我们解决了这个问题。

```typescript
function pioNeed<T>(sth: T) {
    console.log(`pio want ${sth}`);
}
```

