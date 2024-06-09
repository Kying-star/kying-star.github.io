---
date: 2023-02-13
categories: article
author: kyingStar
---

# TypeScript 中常用内置工具类型

## 前置内容

### `keyof` 索引查询

对应任何类型`T`,`keyof T`的结果为该类型上所有公有属性 key 的联合：

```ts
type Preson = {
  name: string;
  age: number;
  skill: () => void;
};

type Son = keyof Preson;
// Son name | age | skill
```

### `T[K]` 索引访问

```ts
type Preson = {
  name: string;
  age: number;
  skill: () => void;
};

type T1 = Preson["name"];
// T1 string
type T2 = Preson["name" | "age"];
// T2 string | number
type T3 = Preson[keyof Preson];
// T3 string | number | (() => void)
type T4 = Preson["114514"];
// T4 any
```

### `&` 交叉类型注意点

> 如果两个类型交织，有相同的 key 但是类型不同，那么交织后该 key 的类型为 any

```ts
type Preson = {
  name: string;
  age: number;
  skill: () => void;
};

type Preson2 = {
  age: boolean;
};

type One = Preson & Preson2;
```

### extends 特性

- 用于接口，表示继承

```ts
interface Preson {
  name: string;
  age: number;
  skill: () => void;
}

interface Preson2 {
  sex: boolean;
}

interface One extends Preson, Preson2 {
  name: string;
}
// One name|age|skill|sex
```

- 表示条件类型，可用于条件判断

```ts
/**
 * @example
 * type A1 = 1
 */
type A1 = "x" extends "x" ? 1 : 2;

/**
 * @example
 * type A2 = 2
 */
type A2 = "x" | "y" extends "x" ? 1 : 2;

/**
 * @example
 * type A3 = 1 | 2
 */
type P<T> = T extends "x" ? 1 : 2;
type A3 = P<"x" | "y">;
// 联合类型会依次检测泛型内的所有类型。

type P<T> = [T] extends ["x"] ? 1 : 2;
/**
 * type A4 = 2;
 */
type A4 = P<"x" | "y">;
// 使用元组可以避免这种错误
```

提问：为什么`A2`和`A3`的值不一样？

- 如果用于简单的条件判断，则是直接判断前面的类型是否可分配给后面的类型
- 若`extends`前面的类型是泛型，且泛型传入的是联合类型时，则会依次判断该联合类型的所有子类型是否可分配给 extends 后面的类型（是一个分发的过程）。

**总结，就是`extends`前面的参数为联合类型时则会分解（依次遍历所有的子类型进行条件判断）联合类型进行判断。然后将最终的结果组成新的联合类型。**

- 阻止 extends 关键词对于联合类型的分发特性

如果不想被分解（分发），做法也很简单，可以通过简单的元组类型包裹以下：

```ts
type P<T> = [T] extends ["x"] ? 1 : 2;
/**
 * type A4 = 2;
 */
type A4 = P<"x" | "y">;
```

### infer

见 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types

## Ts 内置类型工具原理解析

### Partial 实现原理解析

`Partial<T>`将`T`的所有属性变成可选的。

```tsx
type A = {
  num: number;
  str: string;
};

type B = Partial<A>;
// type B = {
//     num?: number | undefined;
//     str?: string | undefined;
// }
```

实现原理

```tsx
type myPartial<T> = {
  [P in keyof T]?: T[P];
};
```

- `[P in keyof T]`通过映射类型，遍历`T`上的所有属性
- `?:`设置为属性为可选的
- `T[P]`设置类型为原来的类型

扩展一下，将制定的`key`变成可选类型:

```typescript
/**
 * 主要通过K extends keyof T约束K必须为keyof T的子类型
 * keyof T得到的是T的所有key组成的联合类型
 */
type PartialOptional<T, K extends keyof T> = {
  [P in K]?: T[P];
};

/**
 * @example
 *     type Eg1 = { key1?: string; key2?: number }
 */
type Eg1 = PartialOptional<
  {
    key1: string;
    key2: number;
    key3: "";
  },
  "key1" | "key2"
>;
```

### Readonly 原理解析

```tsx
/**
 * 主要实现是通过映射遍历所有key，
 * 然后给每个key增加一个readonly修饰符
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * @example
 * type Eg = {
 *   readonly key1: string;
 *   readonly key2: number;
 * }
 */
type Eg = Readonly<{
  key1: string;
  key2: number;
}>;
```

### Pick

挑选一组属性并组成一个新的类型。

```ts
type B = {
  num: number;
  str: string;
};
type A = Pick<B, "num">;
// type A = {
//     num: number;
// }
```

#### 实现原理

```ts
type B = {
  num: number;
  str: string;
};
type A = myPick<B, "num">;
// type A = {
//     num: number;
// }

type myPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

### Record

构造一个`type`，`key`为联合类型中的每个子类型，类型为`T`。文字不好理解，先看例子：

```tsx
/**
 * @example
 * type Eg1 = {
 *   a: { key1: string; };
 *   b: { key1: string; };
 * }
 * @desc 就是遍历第一个参数'a' | 'b'的每个子类型，然后将值设置为第二参数
 */
type Eg1 = Record<"a" | "b", { key1: string }>;
```

Record 具体实现：

```tsx
type Eg1 = myRecord<"a" | "b", string>;
// type Eg1 = {
//     a: string;
//     b: string;
// }
type myRecord<T extends string | number | symbol, P> = {
  [K in T]: P;
};
```

- 值得注意的是`keyof any`得到的是`string | number | symbol`
- 原因在于类型 key 的类型只能为`string | number | symbol`

**扩展: 同态与非同态。划重点！！！ 划重点！！！ 划重点！！！**

- `Partial`、`Readonly`和`Pick`都属于同态的，即其实现需要输入类型 T 来拷贝属性，因此属性修饰符（例如 readonly、?:）都会被拷贝。可从下面例子验证：

```tsx
/**
 * @example
 * type Eg = {readonly a?: string}
 */
type Eg = Pick<{ readonly a?: string }, "a">;
```

从`Eg`的结果可以看到，Pick 在拷贝属性时，连带拷贝了`readonly`和`?:`的修饰符。

- `Record`是非同态的，不需要拷贝属性，因此不会拷贝属性修饰符

可能到这里就有小伙伴疑惑了，为什么`Pick`拷贝了属性，而`Record`没有拷贝？我们来对比一下其实现：

```tsx
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

可以看到`Pick`的实现中，注意`P in K`（本质是`P in keyof T`），T 为输入的类型，而`keyof T`则遍历了输入类型；而`Record`的实现中，并没有遍历所有输入的类型，K 只是约束为`keyof any`的子类型即可。

最后再类比一下`Pick、Partial、readonly`这几个类型工具，无一例外，都是使用到了`keyof T`来辅助拷贝传入类型的属性。

### Exclude 原理解析

`Exclude<T, U>`提取存在于`T`，但不存在于`U`的类型组成的联合类型。

```tsx
/**
 * 遍历T中的所有子类型，如果该子类型约束于U（存在于U、兼容于U），
 * 则返回never类型，否则返回该子类型
 */
type Exclude<T, U> = T extends U ? never : T;

/**
 * @example
 * type Eg = 'key1'
 */
type Eg = Exclude<"key1" | "key2", "key2">;
```

敲重点！！！

- `never`表示一个不存在的类型
- `never`与其他类型的联合后，是没有`never`的

```tsx
/**
 * @example
 * type Eg2 = string | number
 */
type Eg2 = string | number | never;
```

因此上述`Eg`其实就等于`key1 | never`,也就是`type Eg = key1`

### Extract

`Extract<T, U>`提取联合类型 T 和联合类型 U 的所有交集。

```tsx
type Extract<T, U> = T extends U ? T : never;

/**
 * @example
 *  type Eg = 'key1'
 */
type Eg = Extract<"key1" | "key2", "key1">;
```

### Omit 原理解析

`Omit<T, K>`从类型`T`中剔除`K`中的所有属性。

```tsx
/**
 * 利用Pick实现Omit
 */
type Omit = Pick<T, Exclude<keyof T, K>>;
```

## Refs

- [Ts 高手篇：22 个示例深入讲解 Ts 最晦涩难懂的高级类型工具](https://juejin.cn/post/6994102811218673700#heading-1)
- [写 TS 效率大提升,TypeScript 中常用内置工具类型 Omit、Pick、Partial、Required、Readonly、Exclude 、Extract](https://juejin.cn/post/7102853685062926366#heading-11)
