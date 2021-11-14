## Vue事件



#### Vue监听

> > Vue监听属性```watch```,可以监听属性的变化

>```javascript
><div id = "app">
>    <p style = "font-size:25px;">计数器: {{ counter }}</p>
>    <button @click = "counter++" style = "font-size:25px;">点我</button>
></div>
><script type = "text/javascript">
>var vm = new Vue({
>    el: '#app',
>    data: {
>        counter: 1
>    }
>});
>vm.$watch('counter', function(nval, oval) {
>    alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
>});
></script>
>```

> > $watch方法会获取数值变化的前状态和后状态。

------



#### Vue样式绑定

> 1. ##### class属性绑定

> > 为v-bind:class 设置一个对象,从而动态的切换class

>```javascript
><div v-bind:class="{ active: isActive }"></div>
>```

> > 也可以绑定多个对象

> ```javascript
> <div class="static"
>      v-bind:class="{ active: isActive, 'text-danger': hasError }">
> </div>
> ```

> > 或者直接绑定数据中的对象(改变对象名)

>```javascript
><div id="app">
>  <div v-bind:class="classObject"></div>
></div>
>```

> > 此外，我们也可以在这里绑定返回对象的计算属性。这是一个常用且强大的模式：

> ```javascript
> new Vue({
>   el: '#app',
>   data: {
>     isActive: true,
>     error: {
>       value: true,
>       type: 'fatal'
>     }
>   },
>   computed: {
>     classObject: function () {
>       return {
>   base: true,
>         active: this.isActive && !this.error.value,
>         'text-danger': this.error.value && this.error.type === 'fatal',
>       }
>     }
>   }
> })
> ```

> > 数组也可以传

> ```javascript
> <div v-bind:class="[activeClass, errorClass]"></div>
> ```

> > 三目表达式

> ```javascript
> <div v-bind:class="[errorClass ,isActive ? activeClass : '']"></div>
> ```



