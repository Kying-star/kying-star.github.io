## vuex的使用

------

> Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

### 起步

```bash
npm install vuex --save
```

### 配置

```java
//新建index.js文件,路径如下
|-src
   |-store
       |-index.js
```

> > 后在index.js中添加

```js
import vue from "vue";
import vuex from "vuex";
vue.use(vuex);
export default new vuex.Store({
  state: {
    //count: 0,
     //数据管理
  },
  getters: {
    //getCount(state) {
    //  return state.count;
    //},
     //取值方法
  },
  mutations: {
    //addCount(state, num) {
    //  state.count += num;
    //},
    //deleteCount(state, num) {
    //  state.count -= num;
    //},
    //其他的全局方法
  },
     //
  actions: {
   // getAddCount(cxt, num) {
   //   cxt.commit("addCount", num);
   // },
   // getDelCount(cxt, num) {
   //  cxt.commit("deleteCount", num);
   //},
   //
   //向mutations提交
  },
});
```

>actions与mutations用法类似,但Actionds提交的是mutations,而不是直接变更状态

> actions可以包含任意的异步操作

### 调用

```javascript
 methods: {
    add () {
      this.$store.commit("addCount", 10);
    },
    deleteCount () {
      this.$store.commit("deleteCount", 10);
    },
    Aadd () {
      this.$store.dispatch('getAddCount', 1);
    },
    AdeleteCount () {
      this.$store.dispatch('getDelCount', 1)
    }
  },
```

### vuex的辅助函数 mapState、mapGetters、mapACtions

#### 引入

```javascript
import { mapState } from "vuex"
```

#### 使用

```Javascript
  computed: {
    ...mapState({
      count1: state => state.count
    })
  },
```



完事了

