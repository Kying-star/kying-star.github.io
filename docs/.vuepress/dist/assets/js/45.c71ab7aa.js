(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{600:function(t,o,s){"use strict";s.r(o);var a=s(5),_=Object(a.a)({},(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"原型与原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型与原型链"}},[t._v("#")]),t._v(" 原型与原型链")]),t._v(" "),s("h3",{attrs:{id:"知识背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#知识背景"}},[t._v("#")]),t._v(" 知识背景")]),t._v(" "),s("blockquote",[s("p",[t._v("原型在平时工作中用得比较少, 但原型是 JavaScript 中的基础, 是构建大型应用, 框架不可或缺的一环, 是你在写代码时, 不知不觉就应用上了的一个最基础的知识.")])]),t._v(" "),s("h2",{attrs:{id:"原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型"}},[t._v("#")]),t._v(" 原型")]),t._v(" "),s("blockquote",[s("p",[t._v("任何一个函数, 都拥有一个 prototype 属性, 它指向这个函数的原型对象, 如")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { constructor: f Foo(), __proto__: Object }")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//浏览器显示的是__proto__指向的对象<prototype>: Object { … }")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("图表如下")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/函数原型.webp"),alt:"mixureSecure"}}),t._v(" "),s("blockquote",[s("p",[t._v("上图左边代表 "),s("code",[t._v("Foo")]),t._v(" 函数, 它有一个 "),s("code",[t._v("prototype")]),t._v(" 属性, 指向右侧这个原型对象, 每声明一个函数, 都会有这样的一个原型对象, 原型对象有一个 "),s("code",[t._v("constructor")]),t._v(" 属性。"),s("code",[t._v("constructor")]),t._v("指向构造函数"),s("code",[t._v("Foo")]),t._v("本身。")])]),t._v(" "),s("p",[t._v("我们来看"),s("code",[t._v("Foo")]),t._v("的实例化"),s("code",[t._v("foo")]),t._v(",任何构造函数的实例化都有"),s("code",[t._v("__proto__")]),t._v("属性，它指向构造函数的原型。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//{__proto__:object}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//浏览器显示的是__proto__指向的对象<prototype>: Object { … }")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("图表如下")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/实例函数原型指向.webp"),alt:"mixureSecure"}}),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("foo")]),t._v(" 默认会有个 "),s("code",[t._v("__proto__")]),t._v(" 属性, 它也指向构造函数 "),s("code",[t._v("Foo")]),t._v(" 的原型, 这就是 "),s("code",[t._v("__proto__")]),t._v(" 的作用, 即"),s("strong",[t._v("指向构造函数的原型")]),t._v("。")]),t._v(" "),s("p",[t._v("然而"),s("code",[t._v("Foo.prototype")]),t._v("也具有"),s("code",[t._v("__proto__")]),t._v("属性，那么它又指向谁的原型呢?")]),t._v(" "),s("p",[t._v("所以让我们回到 "),s("code",[t._v("Foo.prototype.__proto__")]),t._v(", 来看看他的指向")])]),t._v(" "),s("blockquote",[s("p",[t._v("图表如下")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/Foo.prototype指向.webp"),alt:"mixureSecure"}}),t._v(" "),s("blockquote",[s("p",[t._v("上图的 "),s("code",[t._v("Foo.prototype.__proto__")]),t._v(" 指向 "),s("code",[t._v("Object.prototype")]),t._v(", 也就是说, 每个函数的原型, 都是 Object 的实例. 就好像每个函数的原型, 是由 "),s("code",[t._v("new Object()")]),t._v(" 产生一样")]),t._v(" "),s("p",[t._v("以上就是关于原型的阐述, 如果看到这里似懂非懂, 建议反复看几遍, 注意文字与图片对应, 线条的指向, 看懂了再接着往下看.")])]),t._v(" "),s("h2",{attrs:{id:"原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),s("blockquote",[s("p",[t._v("原型链是 JavaScript 作者为了继承而设计的, 由上边的分析, "),s("code",[t._v("const foo = new Foo()")]),t._v(" 语句, 其实是产生了一个链条的, 如下:")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/img/原型链.webp"),alt:"mixureSecure"}}),t._v(" "),s("blockquote",[s("p",[t._v("我们在 new 出 "),s("code",[t._v("foo")]),t._v(" 对象后, 并没有给 "),s("code",[t._v("foo")]),t._v(" 对象添加任何方法, 但我们依然能从 "),s("code",[t._v("foo")]),t._v(" 对象中调用 "),s("code",[t._v("toString()")]),t._v(", "),s("code",[t._v("hasOwnProperty()")]),t._v(" 等方法. 这是为什么呢?")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasOwnProperty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("原因是, JavaScript 在设计之初, "),s("code",[t._v("__proto__")]),t._v(" 就是用来查找属性和方法的, 从上图的链条来看, 我们在 "),s("code",[t._v("foo")]),t._v(" 这个对象中, 查找 toString 方法, 没找到, 就循着 "),s("code",[t._v("foo.__proto__")]),t._v(" 查找, "),s("code",[t._v("foo.__proto__")]),t._v(" 里也没有找到, 就循着 "),s("code",[t._v("foo.__proto__.__proto__")]),t._v(" 找, 诶这个时候找到了, 则调用, 如果还找不到, 就再往上找, 即 "),s("code",[t._v("foo.__proto__._proto__._proto__")]),t._v(", 这个时候值为 "),s("code",[t._v("null")]),t._v(", 查找结束.")]),t._v(" "),s("p",[t._v("这就是原型链, 我们也可以说, "),s("code",[t._v("Foo")]),t._v(" 继承了 "),s("code",[t._v("Object")]),t._v(", 所以 "),s("code",[t._v("foo")]),t._v(" 中能访问到 Object 的原型属性.")])])])}),[],!1,null,null,null);o.default=_.exports}}]);