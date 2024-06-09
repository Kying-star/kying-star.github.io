## Typescript类（Class)

​		传统的面向对象语言基本都是基于类的，JavaScript 基于原型的方式让开发者多了很多理解成本，在 ES6 之后，JavaScript 拥有了 class 关键字，虽然本质依然是构造函数，但是开发者已经可以比较舒服地使用 class了。

但是 JavaScript 的 class 依然有一些特性还没有加入，比如修饰符和抽象类等。

之于一些继承、静态属性这些在 JavaScript 本来就存在的特性，我们就不过多讨论了。



### 抽象类

​		抽象类做为其它派生类的基类使用,它们一般不会直接被实例化,不同于接口,抽象类可以包含成员的实现细节。

abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

比如我们创建一个 `Animal` 抽象类:

```typescript
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
```

这里我们创建一个实例，发现他报错了
<img :src="$withBase('/img/ts/image-20201001004619611.png')" alt="mixureSecure">

因为我们不能直接实例化抽象类，通常需要我们创建子类继承基类,然后可以实例化子类。

```typescript
abstract class Girl {
    abstract makeSound(): void;
    say(): void {
        console.log(`i'm pio too`);
    }
}

class Pio extends Girl {
    makeSound() {
        console.log(`I'm pio`);
    }
}

let pio = new Pio()

pio.makeSound() //I'm pio
pio.say()  //i'm pio too

```

### 访问限定符

#### public

在typescript中，类中所写的方法默认都是可以供外界访问的，也就是访问的限定是public 。

```typescript
class Gril {
    public Refining() {
        console.log("medicine~~~~");
    }
}

const pio = new Gril()

pio.Refining()  // medicine~~~~
```

#### private

私有限定符只有在类的内部才可以调用

<img :src="$withBase('/img/ts/image-20201009015143648.png')" alt="mixureSecure">

#### protected

当成员被设置为 protected 之后, 被此限定符修饰的成员是只可以被类的内部以及类的子类访问。

```typescript
class Girl {
    protected Refining() {
        console.log("medicine~~~~");
    }
}

class Son extends Girl {
    init() {
        this.Refining()
    }
}

const pio = new Girl()
const lll = new Son()

pio.Refining() //[ts] 属性“Refining”受保护，只能在类“girl”及其子类中访问。
lll.Refining() //[ts] 属性“Refining”受保护，只能在类“girl”及其子类中访问。
```

### class接口

在TS中，class也可以作为接口被使用

而且相对于interface，class有一个好处，可以设置默认值。

```typescript
class Girl {
    name: String = "pio"
    age: Number = 18
}

let Pio: Girl = {
    name: "pio~~",
    age: 12
}

console.log(Pio);
```

