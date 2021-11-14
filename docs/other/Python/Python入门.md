# Python入门

### 标准数据类型

Python3 中有六个标准的数据类型：

- Number（数字）
- String（字符串）
- List（列表）
- Tuple（元组）
- Set（集合）
- Dictionary（字典）

Python3 的六个标准数据类型中：

- **不可变数据（3 个）：**Number（数字）、String（字符串）、Tuple（元组）；
- **可变数据（3 个）：**List（列表）、Dictionary（字典）、Set（集合）。

------

### 声明变量

Python是动态语言，当你指定一个值时，会根据值的类型动态的创建变量

```python
var1 = 1  #number
var2 = 'pio'  #string
var3 = ['lqx','pio']  #List
var4 = ['lqx','pio',19,18]  #tuple
var5 = {name:'lqx',age:19}  #Dictionary
var6 = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}  #Set
```

------



### 数字（Number)

Python3 支持 **int、float、bool、complex（复数）**。

在Python 3里，只有一种整数类型 int，表示为长整型，没有 python2 中的 Long。

像大多数语言一样，数值类型的赋值和计算都是很直观的。

内置的 type() 函数可以用来查询变量所指的对象类型。

```python
>>> a, b, c, d = 20, 5.5, True, 4+3j
>>> print(type(a), type(b), type(c), type(d))
<class 'int'> <class 'float'> <class 'bool'> <class 'complex'>
```

或者使用`isinstance `判断

```python
>>> a = 111
>>> isinstance(a, int)
True
>>>
```

其中`isinstance `和` type` 的区别在于：

- type()不会认为子类是一种父类类型。
- isinstance()会认为子类是一种父类类型。

> 这里还没搞懂

#### 创建数字

```python
var1 = 1
```

#### 删除该变量(手动GC)

```Python
del var1
```

#### 运算符

```python
>>> 5 + 4  # 加法
9
>>> 4.3 - 2 # 减法
2.3
>>> 3 * 7  # 乘法
21
>>> 2 / 4  # 除法，得到一个浮点数
0.5
>>> 2 // 4 # 除法，得到一个整数
0
>>> 17 % 3 # 取余
2
>>> 2 ** 5 # 乘方
32
```

#### 注意:

- 1、Python可以同时为多个变量赋值，如a, b = 1, 2。
- 2、一个变量可以通过赋值指向不同类型的对象。
- 3、数值的除法包含两个运算符：**/** 返回一个浮点数，**//** 返回一个整数。
- 4、在混合计算时，Python会把整型转换成为浮点数。

#### 数值类型实例

| int    | float      | complex    |
| :----- | :--------- | :--------- |
| 10     | 0.0        | 3.14j      |
| 100    | 15.20      | 45.j       |
| -786   | -21.9      | 9.322e-36j |
| 080    | 32.3e+18   | .876j      |
| -0490  | -90.       | -.6545+0J  |
| -0x260 | -32.54e100 | 3e+26J     |
| 0x69   | 70.2E-12   | 4.53e-7j   |

------



### String（字符串）

> Python中的字符串用单引号 **'** 或双引号 **"** 括起来，同时使用反斜杠 **\** 转义特殊字符。

#### 字符串的截取

```python
str = 'Runoob'

print (str)            # 输出字符串   
print (str[0:-1])    # 输出第一个到倒数第二个的所有字符
print (str[0])       # 输出字符串第一个字符
print (str[2:5])     # 输出从第三个开始到第五个的字符
print (str[2:])      # 输出从第三个开始的后的所有字符
print (str * 2)      # 输出字符串两次，也可以写成 print (2 * str)
print (str + "TEST") # 连接字符串
#输出结果
# Runoob
# Runoo
# R
# noo
# noob
# RunoobRunoob
# RunoobTEST
```

#### 反斜杠 `\` 转义特殊字符

```python
>>> print('Ru\noob')
Ru
oob
>>> print(r'Ru\noob')  #加r标识符可输出转义字符本身
Ru\noob
>>>
```

读取某一字符

```python
>>> word = 'Pio'
>>> print(word[0], word[2])
P o
```

> Python 字符串不能被改变。向一个索引位置赋值，比如word[0] = 'm'会导致错误。

#### 注意：

- 1、反斜杠可以用来转义，使用r可以让反斜杠不发生转义。
- 2、字符串可以用+运算符连接在一起，用*运算符重复。
- 3、Python中的字符串有两种索引方式，从左往右以0开始，从右往左以-1开始。
- 4、Python中的字符串不能改变。



### 列表(list)

#### 基本概念

List（列表） 是 Python 中使用最频繁的数据类型。

列表可以完成大多数集合类的数据结构实现。列表中元素的类型可以不相同，它支持数字，字符串甚至可以包含列表（所谓嵌套）。

列表是写在方括号 **[]** 之间、用逗号分隔开的元素列表。

和字符串一样，列表同样可以被索引和截取，列表被截取后返回一个包含所需元素的新列表。

列表截取的语法格式如下：

```
变量[头下标:尾下标]
```

> 列表相当于可以存放任意数据类型的数组

#### 索引图

![list](https://www.runoob.com/wp-content/uploads/2014/08/list_slicing1_new1.png)

列表是天生的栈和队列，支持pop、push、shift，unshift等操作。

```
somecode
```



#### 实现一个字符串反转

```python
def reverseWords(input):
    # 通过空格将字符串分隔符，把各个单词分隔为列表
    inputWords = input.split(" ")

    # 翻转字符串
    # 假设列表 list = [1,2,3,4],
    # list[0]=1, list[1]=2 ，而 -1 表示最后一个元素 list[-1]=4 ( 与 list[3]=4 一样)
    # inputWords[-1::-1] 有三个参数
    # 第一个参数 -1 表示最后一个元素
    # 第二个参数为空，表示移动到列表末尾
    # 第三个参数为步长，-1 表示逆向
    inputWords = inputWords[-1::-1]

    # 重新组合字符串
    output = ' '.join(inputWords)

    return output


if __name__ == "__main__":
    input = 'I like pio'
    rw = reverseWords(input)
    print(rw)
```

#### **注意：**

- 1、List写在方括号之间，元素用逗号隔开。
- 2、和字符串一样，list可以被索引和切片。
- 3、List可以使用+操作符进行拼接。
- 4、List中的元素是可以改变的。





### Tuple（元组）

#### 基本概念

元组（tuple）与列表类似，不同之处在于元组的元素不能修改。元组写在小括号 **()** 里，元素之间用逗号隔开。

元组中的元素类型也可以不相同：

```python
list1 = (1,2,3,4)
list1[2] = 1
print(list1)  #TypeError: 'tuple' object does not support item assignment
```

其实元组和列表的区别不大，元组相当于const的列表。

但是元组中的引用类型是可以修改的，因为元组只是存储了引用类型的内存地址。

```python
list1 = (1,2,3,[1,2,3])
list1[3][1]= 1
print(list1[3])  #[1, 1, 3]
```



#### **注意**

- 1、与字符串一样，元组的元素不能修改。
- 2、元组也可以被索引和切片，方法一样。
- 3、注意构造包含 0 或 1 个元素的元组的特殊语法规则。
- 4、元组也可以使用+操作符进行拼接。



### 集合(set)

#### 基本概念

​		集合（set）是由一个或数个形态各异的大小整体组成的，构成集合的事物或对象称作元素或是成员。

基本功能是进行成员关系测试和删除重复元素。

可以使用大括号 **{ }** 或者 **set()** 函数创建集合，注意：创建一个空集合必须用 **set()** 而不是 **{ }**，因为 **{ }** 是用来创建一个空字典。

创建格式：







常规操作

```python
sites = {'Google', 'firefox', 'IE', 'srifra', 'oprea'}

print(sites)   # 输出集合，重复的元素被自动去掉

# 成员测试
if 'pio' in sites :
    print('pio 在集合中')
else :
    print('pio 不在集合中')


# set可以进行集合运算
a = set('abracadabra')
b = set('alacazam')

print(a)

print(a - b)     # a 和 b 的差集

print(a | b)     # a 和 b 的并集

print(a & b)     # a 和 b 的交集

print(a ^ b)     # a 和 b 中不同时存在的元素
```

