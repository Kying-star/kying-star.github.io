# Rust 入门 (记录学习使用)

### 1 - 为什么要学 Rust ？

我自己闲得慌

### 2 - 环境配置

操作系统：macOS ( Monterey 12.0.1 )

####  2 - 1 安装 Rust

```shell
curl https://sh.rustup.rs -sSf | sh
```

注意，安装 Rust 1.30 以上的版本，cargo 的配置是自动完成的，在你执行以上自动安装脚本时可以看到。

### 3 - 创建 cargo 项目

cargo 是一个 rust 的一个构建系统和包管理器，类似于 npm 、Gradle、cocoaPods 等等。

借用 cargo 可以快速的创建 rust 项目。

```shell
cargo new <yourProjectName>
```

运行后会自动创建一个如下的目录

```shell
.
├── Cargo.lock
├── Cargo.toml
├── src
│   ├── main
│   └── main.rs
└── target
    ├── CACHEDIR.TAG
    ├── debug
    └── rls
```

现阶段主要的编写就在 main.rs 中进行～

可以先运行一下看 hello world

这里要注意 rust 是一门强类型语言，需要先编译在运行可执行文件。

你可以直接使用 `rustc`运行`.rs`后缀的文件

```
rustc main.rs & ./main   
// [1] 5148
// Hello, world!
```

也可以直接使用 cargo 运行

```
// 项目根目录
cargo build
// Finished dev [unoptimized + debuginfo] target(s) in 0.02s
cargo run
// Finished dev [unoptimized + debuginfo] target(s) in 0.01s
// Running `target/debug/basic_grammar`
// Hello, world!
```

### 4 - Rust 基础

####  4 - 1 标准输出流

```rust
 println!("Hello, world!");
 // Hello, world!
 // 为什么 println 后面要加一个!,因为它是一个宏规则而不是函数。
 
 let a  = "lqx";
 println!("hello, {}",a);
 ptintln!("hello,{0} {0}",a);
 // hello, lqx
 // hello,lqx lqx
```

#### 4 - 2 变量

Rust 中使用 let 定义变量，值得注意的是，Rust 是一门强类型语言，这很容易让人与弱类型语言产生混淆。

```rust
let a = "lqx"
const b = 123
```

##### 重影（重新绑定）

 在 Rust 中的变量无法被直接改变，需要使用 let 重新绑定

```rust
let a = 1
a = 2 // 报错 cannot assign twice to immutable variable `a`

let a = 2; // unused variable: `a`
let a = 3; 
```

#### 4 - 3 数据类型

##### 整型

| 位长度  | 有符号 | 无符号 |
| ------- | ------ | ------ |
| 8-bit   | i8     | u8     |
| 16-bit  | i16    | u16    |
| 32-bit  | I32    | u32    |
| 64-bit  | I64    | u64    |
| 128-bit | I128   | u128   |
| arch    | Isize  | usize  |

###### 整数的表述方法

| 进制                 | 例          |
| :------------------- | :---------- |
| 十进制               | 98_222      |
| 十六进制             | 0xff        |
| 八进制               | 0o77        |
| 二进制               | 0b1111_0000 |
| 字节(只能表示 u8 型) | b'A'        |

##### 浮点数型

Rust 支持 32 位浮点数（ f32 ）和 64 位浮点数（ f64 ）。默认情况下，64.0 将表示 64 位浮点数，因为 64 位浮点数的精度更高。

##### 数学运算

```rust
let a = 10;
let a = a * a;
let a = a + a;
let a = a / a;
let a = a % a;
let a = a - a;
let a = i32::pow(5, 2);
```

##### 布尔类型

ture / false

##### 字符类型

char ， Rust 中 char 的类型大小为 4 字节 ，代表 Unicode 标量值，这意味着它可以支持中文，日文，韩文字符等非英文字符甚至表情符号和零宽度空格在 Rust 中都是有效的 char 值。

Unicode 值的范围从 U+0000 到 U+D7FF 和 U+E000 到 U+10FFFF ( 包括两端 )。但是，“字符”这个概念并不存在与 Unicode 中。

而 Rust 中的 字符串默认采用 utf-8 编码。

注意的是: 中文文字编码有两种 ( GBK 和 UTF-8 )，所以编程中使用中文字符串可能导致乱码出现，这是因为源程序与命令行的文字编码不一致，所以在 Rust 中的字符串和字符都必须使用 UTF-8 编码，否则编译器会报错。

##### 复合类型

###### 元组

元组是用一对 `( )` 包括的一组数据，可以包含不同种类的数据。

```rust
let tup = (1,2,3);
let (x,y,z) = tup; // 1 2 3
```

###### 数组

数组使用 `[ ]`包括同类型的数据。

###### 基本语法

```rust
let variable_name:[dataType;size] = [value1,value2,value3];
```
###### 一些使用技巧

```rust
let a = [1,2,3,4]; // 直接复制
let a :[u32;5] = [1,2,3,4,5]; // 定义时限定类型
// 访问 a[0]
let a = [3;5]; // 快速创建 [3,3,3,3,3]
let len = a.len(); // 5
println!("{:?}",a); // [4, 2, 3, 4] ，:?告诉编译器我们要使用 debug 的输出格式，可以看到变量的输出更加友好了
```

###### 遍历数组

```rust
let a = [1,2,3,4];
for index in 0..a.len() {
    println!("{}",a[index]);
}
```

###### 迭代数组

```rust
let a = [1,2,3,4];
for item in a.iter() {
    println!("{}", item);
}
```

###### 可变数组

使用 `let`声明的变量，默认是只读的，数组也不例外。

如果想要数组被修改，需要使用 mut 关键字

```rust
let mut a = [1,2,3,4];
a[0] = 4;
for item in a.iter() {
    println!("{}", item);
}
// 4
// 2
// 3
// 4
```

#### 4 - 4 字符串

##### 字符串字面量`&str`

Rust 的字符串基于切片实现，字符串字面量`&str`是字符的集合，被硬编码复制给一个变量。

```rust
let a = "3G 芯片的含金量";
```

值得注意的是，rust 的字符串字面量模式是静态的，他会一直保存到程序运行结束。

##### 字符串对象`String`

不同于 `&str` , `String` 是 Rust 标准库的内建类型。他并不是一个原始类型，而是经过封装的一个结构体.

在 Rust 中 结构体由 ` pub struct ... ` 创建。

可以在 Rust 的标准库中看到

```rust
pub struct String
```

`String` 是一个可变长的集合，使用 utf-8 作为底层数据编码格式。

字符串对象在 堆 `heap` 中分配（感觉是废话。

一些使用如下(不全，剩下的有需要自己去查罢)

```rust
let mut a = String::new();
let basic = "3G芯片的含金量是";
println!("{} {}",basic ,a); // 3G芯片的含金量是 
a.push_str("114514");
println!("{} {}",basic,a); //3G芯片的含金量是 114514
let mut b = a.replace("114514","1919810");
println!("{} {}",basic,b);
b.push('2');
println!("{} {}",basic,b);
println!("{} {}",basic,b.len());
//输出
3G芯片的含金量是 
3G芯片的含金量是 114514
3G芯片的含金量是 1919810
3G芯片的含金量是 19198102
3G芯片的含金量是 8
3G芯片的含金量是 Split(SplitInternal { start: 0, end: 8, matcher: StrSearcher { haystack: "19198102", needle: "1", searcher: TwoWay(TwoWaySearcher { crit_pos: 0, crit_pos_back: 1, period: 1, byteset: 562949953421312, position: 0, end: 8, memory: 0, memory_back: 1 }) }, allow_trailing_empty: true, finished: false })
```

补充

```rust
let a = "1".to_string();
let b = "2".to_string();
println!("{}", a + &b)
```

#### 4 - 5 元组

```rust
fn main () {
    let tup:(i8,i16,i32) = (1,2,3);
    show_tup(tup);
    let (x,y,z) = tup;
    println!("{} {} {}" , x,y,z);
}
fn show_tup (params:(i8,i16,i32)) {
    println!("{:?}",params);
}
```

### 5 - 条件判断

#### 5 - 1 If else

```rust
fn main() {
    let a = 1;
    if a == 2 {
        println!("111")
    } else if a == 2{
        println!("222")
    } else {
        println!("333")
    }
}
```

#### 5 - 2 match （就是 switch

```rust
fn main() {
    let  a = "1";
    match a {
        "1" => {
            println!("1")
        },
        "2" => {
            println!("2")
        },
        _ => println!("3")       
    }
}
```

### 6 - 循环语句

#### 6 - 1 for

```rust
fn main() {
    let a = [5;3];
    for i in 0..a.len() {
        println!("{}" , i);
    }
}
```

#### 6 - 2 while

```rust
fn main() {
    let mut a = 0;
    while a < 10 {
        a += 1;
        println!("{}", a);
    }
}
```

#### 6 - 3 loop ( 无限循环 )

```rust
fn main() {
    let mut a = 0;
    loop {
        a+=1;
        println!("{}",a)
    }
}
```

#### 6 - 4 break / continue

```rust
fn main() {
    let mut a = 0;
    loop {
        a += 1;
        if a == 10 { break}
        if a % 2 == 0 {continue}
        println!("{}",a)
    }
}
```

### 7 - 函数

#### 7 - 1 定义函数

```rust
fn main() {
    sayhi("lqx")
}

fn sayhi(name: &str) {
    println!("hello {}",name);
}
```

#### 7 - 2 规定入参 / 返参

```rust
fn main() {
    println!("hello {}" ,sayhi("lqx"))
}

fn sayhi(name: &str) -> &str {
    return name
}
```

#### 7 - 3 传形参 / 地址

```rust
fn main() {
    let mut a = 114514;
    change_false_value(a);
    println!("实际值 {}",a);
    change_true_value(&mut a);
    println!("实际值 {}",a)
}

fn change_false_value(mut num : i32) {
    println!("修改形参");
    num = num * 10;
    println!("{}",num);
}

fn change_true_value(num : &mut i32) {
    println!("修改实参");
    *num = 0;
    println!("{}", num);
}
```

#### 

### 8 -  所有权

#### 8 - 1 什么是所有权

所有权就是一个东西属不属于你，你有没有权力随意处理它，比如送人（赋值给另一个变量），比如扔掉 ( GC )。

- Rust 中，任何特定所有权就是一个东西属不属于你，你有没有权力随意处理它，比如送人，比如扔掉。时刻，一个数据只能有一个所有者。
- Rust 中，不允许两个变量同时指向同一块内存区域。变量必须指向不同的内存区域。



#### 8 - 2 转让所有权

转让所有权一般发生在以下情况:

1、把一个变量赋值给另一个变量。

因为 Rust 的所有权机制，在堆上被分配到变量被重新赋值之后，所有权会发生转移，原变量将无法被调用。

```rust
fn main () {
    let a = vec![1, 2, 3, 4];
    let b = a;
    println!("{:?}",a) // 报错 borrow of moved value: `a`
}
```

2、把变量传递给函数作为参数

函数调用也会发生所有权的变化

```rust
fn main () {
    let a = vec![1, 2, 3];
    show(a);
    println!("{:?}",a); // 报错 borrow of moved value: `a` 
}
fn show (a : Vec<i32>) {
    println!("{:?}",a);
}
```

3、函数中返回一个变量作为返回值。

返回值会再次转移所有权

```rust
fn main () {
    let a = vec![1, 2, 3];
    let b = show(a);
    println!("{:?}",b); // [1, 2, 3]
}
fn show (a : Vec<i32>) -> Vec<i32> {
    return a
}
```

#### 8 - 3 借用所有权

看了以上的代码，我们会发现，所有权真是太麻烦了。。

为了更加方便的使用，Rust 提供了借用所有权的机制，我们可以把变量的所有权暂时的借用出去，然后借用者再主动归还，大大提高了编码体验。

```rust
fn main () {
    let a = vec![1, 2, 3];
    show(&a);
    println!("{:?}",a); 
}
fn show (a : &Vec<i32>) {
    println!("{:?}",*a)
}
```

### 9 - 切片

切片，指的是指向一段内存的指针。因此切片可以访问内存块中连续区间内的数据。一般情况下，能够在内存中连续区间存储数据的数据结构有：
数组、向量、字符串。

也就是说，切片可以使用数字索引来访问以上数据结构中的某段数据。

值得注意的是，切片的大小是运行的时候确定的，而不是在编译期间确定的。

```rust
fn main () {
    let a = String::from("一二三四");
    let slice = &a[3..6];
    println!("{}", a.len());
    println!("{:?}",slice);
    show_part(slice);
}

fn show_part(part: &str){
    println!("{:?}", part);
}
```

#### 9 - 1 可变更切片

默认情况下，切片是不可变的，但是可以使用`&mut`关键字声明切片，就可以在切片中改变原变量中的值。

```rust
fn main () {
    let mut a = [1,2,3,4];
    let a_slice = &mut a[0..2];
    show_part(a_slice);
    println!("{:?}", a);
}

fn show_part(part: &mut [i32]){
    part[0] = 30;
    println!("{:?}", part);
}
```



### 10 - 结构体

Rust 使用 `struct` 定义结构体。

```rust
struct Preson {
    name: String,
    age: i32
}
fn main () {
    let lqx = Preson {
        name: String::from("lqx"),
        age: 114514
    };
    println!("{} - {}",lqx.name,lqx.age);
}
```

​    跟其他在堆中被分配的变量一样，结构体的成员变量是不可以被修改的。

如果需要修改，可以使用`mut`

```rust
struct Preson {
    name: String,
    age: i32
}
fn main () {
    let mut lqx = Preson {
        name: String::from("lqx"),
        age: 114514
    };
    lqx.age = 1919810;
    println!("{} - {}",lqx.name,lqx.age);
}
```

#### 10 - 1 结构体作为函数参数 / 返回值

```rust
struct Person {
    name: String,
    age: i32
}
fn main () {
    let lqx = Person {
        name: String::from("lqx"),
        age: 114514
    };
    let lqx1 = make_person(lqx);
    println!("{} - {}", lqx1.name, lqx1.age)
}

fn make_person(person : Person) -> Person {
    let lqx1 = Person {
        name: String::from("lqx1"),
        age: person.age + 1
    };
    return lqx1;
}
```

#### 10 - 2 结构体中的方法

```rust
struct Person {
    name: String,
    age: i32,
}
impl Person {
    fn sayhi(&self) {
        println!("hello {} {}", self.name, self.age);
    }
}
fn main () {
    let lqx = Person {
        name: String::from("lqx"),
        age: 114514,
    };
    lqx.sayhi();

}
```

#### 10 - 3 静态方法

```rust
struct Person {
    name: String,
    age: i32,
}
impl Person {
    fn sayhi(&self) {
        println!("hello {} {}", self.name, self.age);
    }

    fn add(x:i32, y:i32) {
        println!("{} + {} = {}",x,y,x+y);
    }
}
fn main () {
    let lqx = Person {
        name: String::from("lqx"),
        age: 114514,
    };
    lqx.sayhi();
    Person::add(1, 2);
}
```

### 11 - 模块

模块 Module 通常用于将函数或者结构体按照功能分组。我们通常把相似的函数或者实现相同功能的函数和结构体划分到一个模块中。

在 Rust 中，将模块集成到了 `crate` 中, ` crate ` 是 Rust 语言的基本编译单元。也就是说，Rust 中的可执行二进制文件程序或者一个库就是一个 ` crate `。

值得注意的是，可执行二进制程序中必须包含`main()`, 而库并不需要。

前文也有提到， Rust 使用 ` cargo` 作为包管理器，以 crates.io 作为包管理平台。

| 术语                            | 中文      | 说明                                              |
| ------------------------------- | --------- | ------------------------------------------------- |
| crate                           | crate     | Rust 中的基本编译单元，可以被编译为可执行文件或库 |
| cargo                           | cargo     | Rust 官方出品的 Rust 包管理器                     |
| module                          | 模块      | 一个 `crate` 中有相互逻辑的代码                   |
| [crates.io](https://crates.io/) | crates.io | Rust 第三方扩展包的中央官方仓库                   |

#### 11 - 1 定义模块

在 rust 中使用 `mod` 定义模块。

```rust
pub mod game  {
    pub fn play() {
        println!("paly game")
    }
}

fn main () {
    game::play();
}
```

在这里我们会发现，每次调用模块中的函数/结构体都要添加模块限定，这样太蠢了。

Rust 提供了一种语法糖，可以帮助我们化简这个过程。

```rust
pub mod game  {
    pub fn play() {
        println!("paly game")
    }
}
use game::play;
fn main () {
    play();
}
```

> 模块可以嵌套使用

#### 11 - 2 编写一个 crate 库

首先在根目录下创建一个`lib`工程。

```
cargo new test_lib --bin
```

创建完目录如下所示

```
.
├── Cargo.lock
├── Cargo.toml
├── src
│   ├── main
│   └── main.rs
├── target
└── test_lib
    ├── Cargo.lock
    ├── Cargo.toml
    ├── src
    │   ├── lib.rs
    └── target
```

我们模块的主要代码在 `test_lib` 的 src 中编写。

 吧 test_lib/src/lib.rs 中的代码修改为

```rust
pub mod test;
```

这里导出了一个 test 的模块。

在这个模块下的方法我们需要单独再建一个文件`  test.rs` ,来编写我们的具体逻辑。

```rust
pub fn play() {
    println!("paly game");
}
```

这样我们的模块就写完了～，然后要做的是在主项目中引用。

回到根目录，在 `  Cargo.toml` 中添加依赖。

```toml
[package]
name = "basic_grammar"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
test_lib = { path = "test_lib"} # path 为相对路径
```

最后在主项目中引用。

```rust
extern crate test_lib;
use test_lib::test::play;
fn main () {
    play();
}
```

###  12 Rust 集合

#### 12 - 1 向量

一个可变长的数组

```rust
fn main () {
    let a = vec![1, 2, 3, 4, 5];
    println!("{:?}",a);
}
```

API

| 方法       | 签名                                        | 说明                        |
| ---------- | ------------------------------------------- | --------------------------- |
| new()      | pub fn new()->Vec                           | 创建一个空的向量的实例      |
| push()     | pub fn push(&mut self, value: T)            | 将某个值 T 添加到向量的末尾 |
| remove()   | pub fn remove(&mut self, index: usize) -> T | 删除并返回指定的下标元素。  |
| contains() | pub fn contains(&self, x: &T) -> bool       | 判断向量是否包含某个值      |
| len()      | pub fn len(&self) -> usize                  | 返回向量中的元素个数        |

写累了，不多说了。。。

#### 12 - 2 哈希表

哈希表,能力是储存键唯一的键值对。

```rust
use std::collections::HashMap;
fn main () {
    let mut a = HashMap::new();
    a.insert("1",1);
    a.insert("2",2);
    println!("{:?}",a); // {"2": 2, "1": 1}
}
```

#### 12 - 3 哈希集合

哈希集合 HashSet，能力是只能存储的数据值不能相同。

```rust
use std::collections::HashSet;
fn main () {
    let mut a = HashSet::new();
    a.insert(1);
    a.insert(1);
    println!("{:?}",a); // {1}
}
```

### 13 - 错误处理

#### 13 - 1 panic!() 宏和不可恢复错误

主动终止

```rust
fn main () {
    panic!("啊我报错了,我寄了，别人也别想活着"); // 程序直接终止。
    println!("我是别人")
}
```

被动终止

```rust
fn main() {
   let a = [10,20,30];
   a[10]; // 因为 10 超出了数组的长度，所以会触发不可恢复错误
}
```

#### 13 - 2 Result 枚举和可恢复错误

Rust 提供了一个 Result 来处理错误

```rust
enum Result<T,E> {
   OK(T),
   Err(E)
}
```

简单使用

```rust
use std::fs::File;
fn main() {
   let f = File::open("main.jpg"); //文件不存在，因此值为 Result.Err
   println!("{:?}",f);
}
// 文件存在 Err(Os { code: 2, kind: NotFound, message: "No such file or directory" })
// 文件不存在 OK(File)
```

### 14 - 泛型

泛型就是可以在运行时指定数据类型的机制。

```rust
fn main() {
   let arr : Vec<i32> = vec![1,2,3];
   arr.push("1") // expected `i32`, found `&str`rustc(E0308)
}
```

#### 14 - 1 泛型结构体

```rust
struct Car<T> {
    name: T,
}
fn main() {
    let arr : Car<String> = Car {
         name: String::from("玛莎拉蒂"),
    };
    println!("{}", arr.name);
}
```





## Ref 

- [Rust数组](https://www.twle.cn/c/yufei/rust/rust-basic-array.html)
