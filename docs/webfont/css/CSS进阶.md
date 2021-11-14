

# CSS进阶🚀



## 拓展阅读

> 要深入理解一个事物之前，最好先对其整体有个大概了解，这样才不至于蠡测管窥。如果 把 CSS 比作一座大山，则我们对整体的认知就好比知道这座山的位置、山势、道路状况等，这样，当我们深入其中的时候，就不容易迷路，不会做出错误的决策。 

### 关于CSS🎯

​		典型的计算机开发语言看重逻辑思维和抽象能力，CSS 这门语言本身并无逻辑可言，其看重的是特性间的相互联系和具象能力。 具象往往以情感为纽带，无意识不自觉产生，是非常感性的一种能力，这往往是偏理性的 程序员所不擅长的。在某些程序员眼中，CSS 属性就是干巴巴的属性，无法建立类似“人与人 关系”这种很情感化的联系。

​		 当然，认知可以从多个角度进行。例如，接下来要介绍的 CSS“世界观”以及 CSS 的历史 故事，可以让我们多种角度同时进行认知，对 CSS 这门语言的理解更为准确和丰满。

### CSS的世界观🌍 

​		在 CSS 这个世界中，CSS 并不是一个机械枯燥的语言，所有属性都是有血有肉、有着不同个性和身世的个体。不同的个体可以碰撞出不同的火花，激荡出异彩纷呈的故事。

​		这里，我们不妨“脑洞大开”一下：如果把 CSS 世界拍成动漫的话，会是什么样子？ 首先，动漫名可以叫作《建筑神域》，讲述一群建筑魔法师为国家存亡惊心动魄战斗的 故事。然后，出现了“Chrome 王国”的几位建筑魔法师日常训练的画面。只见名为 width 的魔法师手持名叫选择器的法器，准确指向称为的最普通的块状建筑魔法石，口中念道：“层叠天星，幻化有形，50%，变！”只听见一声清脆的“啪”，魔法石宽度变成了 原来的一半。然而，width 却锁眉摇头，口中喃喃念道：“1 毫秒，还不够快，还要再练，不 然在和‘IE 王国’的战斗中很难占得先机！”。

![image-20201022104546677](D:\10月3、4课件\img2\magic.png)

​		此时，width 突然发现前面 1 米之处有一块之石，具有 class="test"的特殊 标记，立即拿出法器，念道：“类名之石，test 为名，为我选择，出！”话音刚落， 之石蓝色荧光一闪，明眼人都能看出来，width 魔法师和魔法石现在处于契约状态。 width 继续念道：“层叠天星，幻化有形，50%，变！”但魔法石却没有任何变化， 此时 width 一拍自己的脑门，似乎明白了什么，转过头对旁边的 display 魔法师大声叫道： “小 D，这边这边，过来帮个忙……来呀，快点……”

​		只见 display 迅速结束自己的练习，屁颠屁颠跑过来：“咋啦？”

​		 “此为内联之石，我无法驾驭，你帮我重塑一下。”

​		 “小问题！正好，魔法师技能委员会刚通过了我的一个新法术，我给你秀一秀？”

​		 “哟，不错啊，快让我瞅瞅！”

​		“好嘞！”只见 display 拿出自己的法器，念道：“类名之石，test 为名，为我选择， 出！”紧接着，“层叠天星，幻化有形，flex，变！” 		只听见一声清脆的“啪”，在两人的合作之下，魔法石宽度也变化了()

![image-20201022104723769](D:\10月3、4课件\img2\display.png)

​		从上面的描述可以看出，在 CSS 世界中，HTML 是魔法石，选择器就是选择法器，CSS 属性就 是魔法师，CSS 各种属性值就是魔法师的魔法技能，浏览器就是他们所在的“王国”，“王国”会不断 更新法律法规（版本升级），决定是否允许使用新的魔法石（HTML5 新标签新属性），是否允许新的 魔法师入“国籍”（CSS3 新属性），或者允许魔法师使用某些新技能（CSS 新的属性值），以及是否舍 弃某些魔法技能（如 display:run-in）；操作系统就是他们所在的世界，不同的操作系统代表不 同的平行世界，所以，CSS 世界有这么几个比较大的平行世界，即 Windows 世界、OS X 世界以及移 动端的 iOS 世界和 Android 世界。不同世界的浏览器王国的命运不一样，例如，在 OS X 世界中，IE 王国是不存在的，而 Safari 王国却异常强大，但在 Windows 世界中，Safari 王国却异常落寞。 

​		以上这一切就构成了完整的 CSS 世界的“世界观”。



### CSS的历史

#### 世界都是创造出来的

​		世界都是创造出来的。很自然，CSS 世界也是一点一点创造出来的。这世间上的事情只要 发生了，都是有原因的。CSS 世界的出现也不例外。 下面我们就来看一下 CSS 世界出现的历史。虽然我知道，有些人对这些历史可能不感兴趣，但是要想深入理解 CSS 属性的一些设计原因、表现原理还真离不开当时的历史环境。 

​		大家可能都听说过马云 1995 年去美国，第一次接触了互联网，在这个时间点，HTML 才 是第一版且诞生没几年，W3C 才刚刚成立，CSS 还没出现。那时候的互联网几乎都是文字信息， 显示一张图片都是要上天的感觉。

​		 大家可能没意识到，那个时候前端的发展和现在一样快，设计师要求越来越多，HTML 也 越来越庞杂。急需要其他专门负责样式的语言，据说当时有几个样式表语言，最后是 CSS 胜出 了，为什么呢？它的胜出靠的是**“层叠”**特性。 

​		CSS 全称是 Cascading Style Sheets，翻译成中文就是“层叠样式表”。所谓**“层叠”**，顾名 思义，就是样式可以层层累加，比方说页面元素都继承了 12 像素的大小，某标题就可以设置成 14 像素进行叠加。发现没？这种层叠策略对于样式的显示是相当的灵活。

​		 于是，从 1996 年 12 月 17 日 CSS1 诞生后，CSS 在样式呈现领域可谓所向披靡，没有遇到任 何竞争对手。1998 年 5 月 12 日 CSS2 发布，推行内容和表现分离，表格（table）布局开始落寞。

​		 1998 年腾讯、新浪和网易成立，当时搜狐则成立 1 年不到。那个时候是门户的时代，人们 更关注的是信息的获取，所以网站的功能主要就是信息展示，信息是什么？在那个时代，在互 联网领域，信息就是图片和文字。换句话说，那时候的网站前端技术关心的是图片和文字的呈 现，而 CSS2（包括 9 年之后，也就是 2007 年才出现的 CSS2.1）都是为图文展示服务的。

​		 我再重复一遍：**CSS 世界的诞生就是为图文信息展示服务的**。这句话在本书中会非常频繁 地出现，知道这一点你就会明白很多事情。 好，下面让我们回到本节开头的那句话—“世界都是创造出来的”！为何我要反复强调 这句话呢？如果站在造物主的角度去思考 CSS 世界的种种表现，很多问题就会迎刃而解。

​		 现在给你机会当一回造物主，让你自己重新构建一个 CSS 世界，唯一的要求就是，这个世 界要非常便于图片和文字的呈现，你会去如何构建呢？

------

**以上是我从《CSS世界》中摘抄的一段，是本节课的选读内容，主要讲了一些对CSS的理解和CSS的发展历史，有兴趣的同学可以看一看**





## CSS中的值和单位📏

#### 数字，长度和百分比

|    数值类型    | 描述                                                         |
| :------------: | :----------------------------------------------------------- |
|  `<integer>`   | `<integer>`是一个整数，比如1024或-55。                       |
|   `<number>`   | `<number>`表示一个小数——它可能有小数点后面的部分，也可能没有，例如0.255、128或-1.2。 |
| `<dimension>`  | `<dimension>`=`<number>`+单位，它有一个附加的单位，例如45deg、5s或10px。`<dimension>`是一个伞形类别，包括`<length>`、`<angle>`、`<time>`和`<resolution>`类型。 |
| `<percentage>` | `<percentage>`表示一些其他值的一部分，例如50%。百分比值总是相对于另一个量，例如，一个元素的长度相对于其父元素的长度。 |

> 这里只列举了和长度相关的，想要了解更多的值可以戳这个[链接](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units)

#### 单位

​		CSS中有两种类型的长度——相对长度和绝对长度。重要的是要知道它们之间的区别，以便理解他们控制的元素将变得有多大。

##### 绝对长度单位

| 单位 | 名称         | 等价换算            |
| :--- | :----------- | :------------------ |
| `cm` | 厘米         | 1cm = 96px/2.54     |
| `mm` | 毫米         | 1mm = 1/10th of 1cm |
| `Q`  | 四分之一毫米 | 1Q = 1/40th of 1cm  |
| `in` | 英寸         | 1in = 2.54cm = 96px |
| `pc` | 十二点活字   | 1pc = 1/16th of 1in |
| `pt` | 点           | 1pt = 1/72th of 1in |
| `px` | 像素         | 1px = 1/96th of 1in |

> 在日常开发中一般只会用到px(

##### 相对长度单位

​		相对长度单位相对于其他一些东西，比如父元素的字体大小，或者视图端口的大小。使用相对单位的好处是，经过一些仔细的规划，可以使文本或其他元素的大小与页面上的其他内容相对应。下表列出了web开发中一些最有用的单位。

|  单位  | 相对于                                                       |
| :----: | :----------------------------------------------------------- |
|  `em`  | 在 font-size 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小，如 width |
|  `ex`  | 字符“x”的高度                                                |
|  `ch`  | 数字“0”的宽度                                                |
| `rem`  | 根元素的字体大小                                             |
|  `lh`  | 元素的line-height                                            |
|  `vw`  | 视窗宽度的1%                                                 |
|  `vh`  | 视窗高度的1%                                                 |
| `vmin` | 视窗较小尺寸的1%                                             |
| `vmax` | 视图大尺寸的1%                                               |

> 其中vw、vh、rem单位使用较多



## CSS选择器进阶🌊

选择器一览

![image-20201022112112140](D:\10月3、4课件\img2\selector.png)

------



#### 属性选择器

​		CSS **属性选择器**通过已经存在的属性名或属性值匹配元素。

##### 简单属性选择器

```html
    <a title="baidu" href="https://www.baidu.com/">baidu</a>
    <a class="aba-aba">阿巴阿巴</a>
```

```css
/* [属性名] */
[title] {
  color: purple;
}
/* 也可以规定属性的值 */
[title="baidu"] {
    color: red;
}
[class="aba-aba"] {
    color: coral;
}
/* 也可以多个属性链接 */
[title="baidu"][href="https://www.baidu.com/"]
{
    color: red;
}
```



### 文档结构选择器

#### 后代选择器

​		后代选择器可以匹配父元素下的所有对应的子元素

```html
    <div class="box">
        <li>阿巴</li>
        <p>大师我悟了</p>
        <li>阿巴</li>
        <li>阿巴</li>
        <div>
            <li>啊这</li>
            <li>啊这</li>
            <li>啊这</li>
        </div>
    </div>
```

```css
/* 匹配box类下面的所有li标签 */
.box li {
    color: coral;
}
/* 所有li标签变色 */
```

#### 子选择器

​		子选择器选择可以父元素下第一层的子元素

```css
/* 只匹配box类下的 */
.box > li {
    color: coral;
}
/* 只有阿巴阿巴的li标签变色 */
```



#### 相邻兄弟选择器

​		相邻兄弟选择器可以选择与与当前元素相邻的第一个元素

```css
/* 与p标签下面的第一个li标签 */
p + li {
    color: coral;
}
/* p标签下面的第一个li标签变色
```



#### 一般兄弟选择器

​		相邻兄弟选择器可以选择与与当前元素相邻(之下)的所有元素

```css
/* 与p标签下面的所有li标签 */
p ~ li {
    color: coral;
}
/* p标签下面紧挨的两个li标签变色
```

#### 伪类

**给既存的元素模拟新添加一个类来实现某种效果**

- :link
- :visited
- :hover
- :active
- :first-child
- ......

#### 伪元素

**模拟新添加一个元素来实现某种效果**

- ::before
- ::after

*伪类和伪元素具体的暂时就先不讲太多了，可参考W3school和菜鸟教程等*

> 以后上课会深入这里，研究一些炫酷的特效😊

推荐文章：[CSS伪类伪元素详解](https://segmentfault.com/a/1190000006701056)





## 布局

​		CSS页面布局技术允许我们拾取网页中的元素，并且控制它们相对正常布局流、周边元素、父容器或者主视口/窗口的位置。

- 正常布局流
- [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)属性
- 弹性盒子
- 网格
- 浮动
- 定位
- CSS 表格布局
- 多列布局

每种技术都有它们的用途，各有优缺点，相互辅助。通过理解各个布局方法的设计理念，你能够找到构建你想要的网页需要的布局方案。

### 正常布局流(Normal flow)

​		正常布局流也叫普通文档流，在正常布局流下所有元素会**默认**自动从左往右，从上往下的**流式排列方式**

### display

​	display允许我们更改文档的默认布局方式🎨

- block         块级元素
- inline         行内元素 / 内联元素
- inline-block    行内块级元素
- none          隐藏元素
- flex           flex布局
- grid           grid布局



### float

[CSS深入理解之float浮动](https://segmentfault.com/a/1190000014554601)



### position⚓

　position属性共有四种不同的定位方法 ，分别是

- static         默认值，正常位置
- relative       相对定位，相对于其正常位置进行定位
- absolute      绝对定位，相对于 static 定位以外的第一个父元素进行定位，若没有则相对于html
- fixed         固定定位，相对于浏览器窗口进行定位
- sticky        它基本上是相对位置和固定位置的混合体，它允许被定位的元素表现得像相对定位一样，直到它滚动到某个阈值点（例      如，从视口顶部起10像素）为止，此后它表现的像绝对定位一样。

#### 改变定位后的元素

**top/bottom/left/right**

1. **值**

```css
/* 向下移动 */
bottom:-20px;
/* 向右移动 */
left:50px; 
```

- 可为**负值**，表示向相反的方向移动
- 可为**百分比**，水平偏移量根据其父元素 width 属性的值计算得到，垂直偏移量根据其父元素 height 属性的值计算得到，但如果父元素没有显式定义 height 属性，就等同于 height 属性的值为 0



​	2.**表现**

- 绝对或固定元素会生成一个块级框，而不论该元素本身是什么类型

- 固定元素不占据空间，即使窗口滚动它也不会滚动

- 相对定位元素仍然占据文档中的原有位置，并且对父元素和兄弟元素的布局都没有任何影响，但可能会覆盖其他元素

- relative和fixed脱离文档流，子元素无法撑起父元素的高度

  

  3.**z-index**



> 只能在position属性值为relative或absolute或fixed的元素上有效



三维坐标系的z轴，简单来说值越大，越在最上层



链接：[深入理解css中position属性及z-index属性](https://www.cnblogs.com/zhuzhenwei918/p/6112034.html)



### Flex！Flex！Flex！✔

​		Flex十分简单灵活，简单几行代码就可以实现各种页面的的布局，以前我在学习页面布局的时候我深受其 float、display、position 这些属性的困扰。然而学习 Flex 布局，你只要学习几个 CSS 属性，就可以写出简洁优雅复杂的页面布局。

#### Flex 模型说明

![img](C:\Users\kying\Desktop\css与css3 (书籍)\v2-54a0fc96ef4f455aefb8ee4bc133291b_720w.jpg)

- **主轴（main axis）**是沿着 flex 元素放置的方向延伸的轴（比如页面上的横向的行、纵向的列）。该轴的开始和结束被称为 **main start** 和 **main end**。
- **交叉轴（cross axis）**是垂直于 flex 元素放置方向的轴。该轴的开始和结束被称为 **cross start** 和 **cross end**。
- 设置了 `display: flex` 的父元素被称之为 **flex 容器（flex container）。**
- 在 flex 容器中的元素被称之为 **flex 项**（**flex item**）

------

 		Flex中的元素都是按照这两个轴排列的，每当我们设置某个元素为flexbox，就会形成主轴和交叉轴

默认的主轴是水平方向的，从右到左，交叉轴是垂直方向的，从上到下。

<img src="C:\Users\kying\Desktop\css与css3 (书籍)\image-20201023202918096.png" alt="image-20201023202918096" style="zoom:50%;" />

#### flex容器的属性

设置了 `display: flex`的元素有以下六个可选属性

```css
.box {
    display: flex;
    flex-direction: column; /*设置主轴的方向*/
    flex-wrap: nowrap; /* 设置子元素是否可以换行 */
    flex-flow: column nowrap; /* flex-direction和flex-wrap属性的简写 */
    justify-content: center; /* 规定主轴上的对齐方式 */
    align-items: center; /* 规定交叉轴上的对齐方式*/
    align-content: center; /* 规定出现多根轴线时的对齐方式 仅有一根轴线时该属性无效*/
}
```

#### flex-direction

flex可以十分轻松的排布元素的行列顺序

``` css
/* 这里|指的是并列的属性可选其一 */
.flex-box{
	flex-direction: column-reverse | column | row | row-reverse ;
}
/* 子元素按列逆置排布 | 子元素按列排布 | 子元素按行排布 | 子元素按行逆置排布 */
```

![image-20201023203416505](C:\Users\kying\Desktop\css与css3 (书籍)\image-20201023203416505.png)

注意我们之前提到的**主轴（main axis）**是沿着 flex 元素放置的方向延伸的轴

也就是说`flex-direction`的本质是改变主轴的方向

#### flex-wrap

默认情况下，子元素都排在一条线（又称"轴线"）上。

`flex-wrap`属性规定如果一条轴线排不下，子元素该如何换行。

```css
/* 这里|指的是并列的属性可选其一 */
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

它可以取三个值

（1）`nowrap`（默认）：不换行。

![img](C:\Users\kying\Desktop\css与css3 (书籍)\bg2015071007.png)

（2）`wrap`：换行，第一行在上方。

![img](C:\Users\kying\Desktop\css与css3 (书籍)\bg2015071008.jpg)

（3）`wrap-reverse`：换行，第一行在下方。

![img](C:\Users\kying\Desktop\css与css3 (书籍)\bg2015071009.jpg)

####  flex-flow

flex-flow提供了一种`flex-direction`和`flex-direction`的简写形式

```css
/* 可以使用flex-direction和flex-wrap的属性作为参数 */
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
/* 例如flex-flow: column nowrap; */
```

#### justify-content

`justify-content`属性定义了子元素在主轴上的对齐方式。

```css
/* 这里|指的是并列的属性可选其一 */
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

<img src="C:\Users\kying\Desktop\css与css3 (书籍)\image-20201023221557863.png" alt="image-20201023221557863" style="zoom:50%;" />



#### align-items

`align-items`属性定义项目在交叉轴上如何对齐

```css
/* 这里|指的是并列的属性可选其一 */
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)

#### align-content

`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
/* 这里|指的是并列的属性可选其一 */
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)

有时间的同学可以看一看

[青蛙小游戏](https://flexboxfroggy.com/#zh-cn)

[三十分钟学会Flex布局](https://zhuanlan.zhihu.com/p/25303493)



### Grid

网格布局（Grid）是最强大的 CSS 布局方案。

它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。

不过咱们这节课暂时不会深入讲解Grid，想要了解的同学可以戳下面的链接

[花园小游戏](https://cssgridgarden.com/#zh-cn)

[Grid深入浅出](http://layout.imweb.io/article/grids.html)



## 居中方案



*定宽高的当然也可以用不定宽高的居中方案*



### **水平**



- **内联元素**水平居中 在外层用 text-align:center
- **定宽块级**元素水平居中

- - 非绝对定位加margin-left和margin-right设为auto
  - 绝对定位left: 50%; 加 margin-left: -50px; (假设宽度100px)

- **任意块级**元素水平居中

- - 绝对定位left: 50%; 加 transform: translateX(-50%);
  - 绝对定位加margin: auto
    绝对定位left: 0; right: 0; 加 margin-left 和 margin-right 设置为 auto
  - **inline-block（可多个）**
    父元素text-align: center: 子元素display: inline-block;
  - **flex布局（可多个）**
    父元素设置display: flex; justify-content: center;



### **垂直**



- **单行文字**垂直居中

- - 将line-height设为与父元素高度相同
  - padding上下填充相同

- **多行文本**垂直居中

- - padding填充上下相同
  - flex布局，外层元素定高加以下代码，（会将内部子元素变成block类型）

```
display: flex;
flex-direction: column;
justify-content: center;
```

- **定高块级**元素垂直居中
  子元素绝对定位 top: 50%; 和负边距 margin-top: -50px; (假设宽度100px)
- **不定高块级**元素垂直居中

- - 子元素绝对定位 top: 50%; 加transform: translateY(-50%);
  - 绝对定位加margin: auto;
    设置元素为绝对定位且top与bottom均为零，margin-top与margin-bottom为auto
  - flex布局

```css
/* 会将居中元素内的文本也垂直居中 */
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```



**水平垂直**



- **定宽定高**
  绝对定位加负边距
- **不定宽高**

- - 绝对定位left: 50%; top: 50%; 加 transform: translate(-50%,-50%);
  - 绝对定位加margin: auto;
    设置元素为绝对定位且top、bottom、left与right均为零，margin值为auto
  - flex布局
    父元素设置display: flex; justify-content: center; align-items: center;
  - Grid布局
    父元素display: grid; 子元素设置justify-self: center; align-self: center;





# Git

[git小游戏](https://learngitbranching.js.org/?locale=zh_CN)

安装和配置的教程可以看群文件，也可以戳这个[链接](https://www.liaoxuefeng.com/wiki/896043488029600)

这里主要讲一下用vscode管理git

<img src="C:\Users\kying\AppData\Roaming\Typora\typora-user-images\image-20201024101313716.png" alt="image-20201024101313716" style="zoom:50%;" />

新建一个仓库

![image-20201024102017999](C:\Users\kying\AppData\Roaming\Typora\typora-user-images\image-20201024102017999.png)

建完仓库默认是这样的

![image-20201024102703863](C:\Users\kying\AppData\Roaming\Typora\typora-user-images\image-20201024102703863.png)

打开我们的vscode

![image-20201024102942984](C:\Users\kying\AppData\Roaming\Typora\typora-user-images\image-20201024102942984.png)

在终端栏里输入以下命令行，注意这里的仓库链接是你新建仓库的

![image-20201024103333279](C:\Users\kying\AppData\Roaming\Typora\typora-user-images\image-20201024103333279.png)

新建一个文件夹，在文件夹下新建一个index.html(这个名字随便嗷☺)

![image-20201024104258063](C:\Users\kying\AppData\Roaming\Typora\typora-user-images\image-20201024104258063.png)

点进去出现的以下图标，这里选择暂存更改(就是下图的确认更改)

![image-20201024104843330](C:\Users\kying\AppData\Roaming\Typora\typora-user-images\image-20201024104843330.png)

提交代码

![image-20201024105319368](C:\Users\kying\AppData\Roaming\Typora\typora-user-images\image-20201024105319368.png)

![image-20201024105529103](C:\Users\kying\AppData\Roaming\Typora\typora-user-images\image-20201024105529103.png)

然后就可以在github上看到了

![image-20201024113654637](C:\Users\kying\AppData\Roaming\Typora\typora-user-images\image-20201024113654637.png)

以后写作业就可以直接在这个仓库里添加。

![image-20201024113853248](C:\Users\kying\AppData\Roaming\Typora\typora-user-images\image-20201024113853248.png)

然后将这个仓库同步到github上

![image-20201024113950287](C:\Users\kying\AppData\Roaming\Typora\typora-user-images\image-20201024113950287.png)

就能在github上看到了

![image-20201024114020323](C:\Users\kying\AppData\Roaming\Typora\typora-user-images\image-20201024114020323.png)

# typora

有记笔记习惯的同学可以看一下

typora是一款轻量级的markdow编辑软件，支持代码图形操作，超好用，点就完事了

给个下载链接https://typora.io/

# 学习资源



[GitHub](https://github.com/)



### 在线文档



- [MDN](https://developer.mozilla.org/zh-CN)
- [W3C](http://www.chinaw3c.org/)
- [w3school](http://www.w3school.com.cn/)
- [w3cschool](https://www.w3cschool.cn/index.html)
- [菜鸟教程](http://www.runoob.com/)
- [廖雪峰官方网站](https://www.liaoxuefeng.com/)



### 技术论坛



- [CSDN](https://www.csdn.net/)
- [掘金](https://juejin.im/)
- [SegmentFault思否](https://segmentfault.com/)



### 视频教程



- [哔哩哔哩](https://www.bilibili.com/)
- [慕课网](https://www.imooc.com/)
- [腾讯课堂](https://ke.qq.com/)
- [网易云课堂](https://study.163.com/)



# 作业

LV 1

通关[青蛙小游戏](https://flexboxfroggy.com/#zh-cn)

> 上传最后一关截图即可，做了后面的作业的同学可以不交

LV 2 

实现 Part 1的页面

LV 3 

实现 Part 1  +  Part 2的页面

LV 4 

实现 Part 1  +  Part 2 +  Part 3的页面



part 1

![dscds1](C:\Users\kying\Desktop\css与css3 (书籍)\dscds1.png)

part 2

![dscds2](C:\Users\kying\Desktop\css与css3 (书籍)\dscds2.png)

part 3

![dscd3](C:\Users\kying\Desktop\css与css3 (书籍)\dscd3.png)



最终效果

![dscds](C:\Users\kying\Desktop\css与css3 (书籍)\dscds.png)

# Refs

《CSS世界》

《CSS权威指南》

[MDN -- CSS的值与单位](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units)

