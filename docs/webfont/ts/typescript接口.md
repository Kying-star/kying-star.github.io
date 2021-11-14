# Typescript接口



## 接口（interface）

>TypeScript 的核心原则之一是对值所具有的结构进行类型检查,它有时被称做“鸭式辨型法”或“结构性子类型化”。
>
>在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。



说白了就是自己规定一种复杂变量类型



### 接口的使用

比如我们有一个函数，这个函数接受一个 `Girl` 对象，然后返回这个 `Girl` 对象的 `name` 属性:

```typescript
const getUserName = (Girl) => Girl.name
```

这时候配好规范的ts报错了，他说user是any类型，但这里我们需要的是一种自己规定的变量类型，这时候就要用到接口。

让我们用interface 来描述这个类型:

```typescript
interface Girl {
    name: string
    age: number
}

let pio: Girl = {
    name: 'pio',
    age: 18
}

const getUserName = (girl: Girl) => girl.name
console.log(getUserName(pio)); //pio
```

这个接口 `Girl` 描述了参数 `girl `的结构，当然接口不会去检查属性的顺序，只要相应的属性存在并且类型兼容即可。



### 含有联合类型的接口

接口中的某一个属性可能需要有多种类型

```typescript
interface Greet {
    name: string;
    mothed: string | (() => string);
}

// commandline 是字符串
var options: Greet = { name: "pio", mothed: "Hello" };
console.log(`${options.name} say ${options.mothed}`) //pio say Hello


// commandline 是一个函数表达式
options = { name: "pio", mothed: () => { return "say Hi"; } };

var fn: any = options.mothed;
console.log(fn()); //say Hi

```



### 可选属性

当某个属性是可有可无时，我们可以规定他为可选属性

```typescript
interface Girl {
    name: stringe
    age?: number   //age可以是number，也可以是undefined
}
```





### 只读属性

如果某个属性是不可修改的，就把他定义为只读属性

```typescript
interface Girl {
    name: string
    age?: number
    readonly locked: boolean
}
```

当使用该接口时修改locked就会警告



### 函数类型

很多时候我们的对象是具有方法的

所以研究一下如何定义一个含有函数的接口是有必要的

那么我们该如何描述这种情况呢？

一种是直接在 interface 内部描述函数:

```typescript
interface Girl {
    name: string
    age?: number
    readonly locked: boolean
    say: (words: string) => string
}
```

或者直接用interface定义一种方法

```typescript
interface Say {
    (words: string) : string
}
```

然后再User中使用

```typescript
interface Girl {
    name: string
    age?: number
    readonly locked: boolean
    say: Say
    }
```



### 属性检查

接口会对传入的参数进行检查

```typescript
interface Config {
  width?: number;
}

function  CalculateAreas(config: Config): { area: number} {
  let square = 100;
  if (config.width) {
      square = config.width * config.width;
  }
  return {area: square};
}

let mySquare = CalculateAreas({ widdth: 5 });
// error: 'widdth' not expected in type 'Config'
```

因为传入的参数书写错误，所以引起了ts的报错



### 可索引类型（接口中的数组）

我们再假设一个场景，如果 `Girl` 还包含一个属性，这个属性是 `Girl` 拥有的邮箱的集合，但是这个集合有多少成员不确定，应该如何描述？

比如pio的信息如下:

```json
{
    name: 'pio',
    age: 18,
    isMale: false,
    say: Function,
    phone: {
        NetEase: 'pio@163.com',
        qq: '1845751425@qq.com',
    }
}
```

而kying-star的信息如下

```json
{
    name: 'kying-star',
    age: 20,
    isMale: true,
    say: Function,
    phone: {
        NetEase: 'kying-star@163.com',
        qq: '784536325@qq.com',
        sina: 'abc784536325@sina.com'
    }
}
```

他们的phone属性是不固定的，在以后我们也不知到他会使用怎样的phone

这个时候我们可以用可索引类型表示，可索引类型具有一个索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。

```typescript
interface Phone {
    [name: string]: string
}

interface User {
    name: string
    age?: number
    readonly isMale: boolean
    say: () => string
    phone: Phone
}
```

### 继承接口

我们有一天又有一个新需求，就是需要重新创建一个新的VIP `User` ，这个 `VIPUser` 的属性与普通 `User` 一致，只是多了一些额外的属性，这个时候需要重新写一个接口吗？

并不需要，我们可以用继承的方式，继承 `User` 的接口。

```typescript
interface VIPUser extends User {
    broadcast: () => void
}
```

也可以继承多个接口:

```typescript
interface VIPUser extends User, SupperUser {
    broadcast: () => void
}
```

