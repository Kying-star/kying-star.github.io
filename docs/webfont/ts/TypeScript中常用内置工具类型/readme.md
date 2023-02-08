# TypeScript中常用内置工具类型

## 前置内容

### `keyof` 索引查询

对应任何类型`T`,`keyof T`的结果为该类型上所有公有属性key的联合：

```ts
type Preson = {
    name: string
    age: number
    skill: () => void
}

type Son = keyof Preson
// Son name | age | skill
```

### `T[K]` 索引访问

```ts
type Preson = {
    name: string
    age: number
    skill: () => void
}

type T1 = Preson['name']
// T1 string
type T2 = Preson['name' | 'age']
// T2 string | number
type T3 = Preson[keyof Preson]
// T3 string | number | (() => void)
type T4 = Preson['114514']
// T4 any
```

### `&` 交叉类型注意点

> 如果两个类型交织，有相同的 key 但是类型不同，那么交织后该 key 的类型为 any

```ts
type Preson = {
    name: string
    age: number
    skill: () => void
}

type Preson2 = {
    age: boolean
}

type One = Preson & Preson2 
```

### extends 继承

- 用于接口，表示继承

```ts
interface Preson {
    name: string
    age: number
    skill: () => void
}

interface Preson2 {
    sex: boolean
}

interface One extends Preson,Preson2 {
    name: string
}
// One name|age|skill|sex
```

- 表示条件类型，可用于条件判断

```ts
/**
 * @example
 * type A1 = 1
 */
type A1 = 'x' extends 'x' ? 1 : 2;

/**
 * @example
 * type A2 = 2
 */
type A2 = 'x' | 'y' extends 'x' ? 1 : 2;

/**
 * @example
 * type A3 = 1 | 2
 */
type P<T> = T extends 'x' ? 1 : 2;
type A3 = P<'x' | 'y'>
// 联合类型会依次检测泛型内的所有类型。

type P<T> = [T] extends ['x'] ? 1 : 2;
/**
 * type A4 = 2;
 */
type A4 = P<'x' | 'y'>
// 使用元组可以避免这种错误
```

### infer







## Refs
- [Ts高手篇：22个示例深入讲解Ts最晦涩难懂的高级类型工具](https://juejin.cn/post/6994102811218673700#heading-1)
- [写TS效率大提升,TypeScript中常用内置工具类型Omit、Pick、Partial、Required、Readonly、Exclude 、Extract](https://juejin.cn/post/7102853685062926366#heading-11)