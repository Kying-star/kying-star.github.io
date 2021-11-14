### Vue 自定义组件

---

> 组件（Component）是 Vue.js 最强大的功能之一。
>
> 组件可以扩展 HTML 元素，封装可重用的代码。
>
> 组件系统让我们可以用独立可复用的小组件来构建大型应用，几乎任意类型的应用的界面都可以抽象为一个组件树：

<img :src="$withBase('/img/components.png')" alt="mixureSecure">

#### 全局组件

> > 所有实例都能用全局组件。

```javascript
<div id="app">
    <runoob></runoob>
</div>
 <script>
// 注册
Vue.component('runoob', {
  template: '<h1>自定义组件!</h1>'
})
// 创建根实例
new Vue({
  el: '#app'
})
</script>

<div id="app">
    <runoob></runoob>
</div>

<script>
// 注册
Vue.component('runoob', {
  template: '<h1>自定义组件!</h1>'
})
// 创建根实例
new Vue({
  el: '#app'
})
</script>
```

#### 局部组件

> > 我们也可以在实例选项中注册局部组件，这样组件只能在这个实例中使用：

```javascript
<div id="app">
    <runoob></runoob>
</div>

<script>
var Child = {
  template: '<h1>自定义组件!</h1>'
}

// 创建根实例
new Vue({
  el: '#app',
  components: {
    // <runoob> 将只在父模板可用
    'runoob': Child
  }
})
</script>
```

#### Prop

> prop 是子组件用来接受父组件传递过来的数据的一个自定义性。
>
> 父组件的数据需要通过 props 把数据传给子组件，子组件需要显式地用 props 选项声明 "prop"：

```javascript
<div id="app">
    <child message="hello!"></child>
</div>

<script>
// 注册
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 同样也可以在 vm 实例中像 "this.message" 这样使用
  template: '<span>{{ message }}</span>'
})
// 创建根实例
new Vue({
  el: '#app'
})
</script>
```

##### 动态 Prop

> 类似于用 v-bind 绑定 HTML 特性到一个表达式，也可以用 v-bind 动态绑定 props 的值到父组件的数据中。每当父组件的数据变化时，该变化也会传导给子组件：
