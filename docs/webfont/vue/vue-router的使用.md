## vue-router的使用

> Vue Router 是 [Vue.js](http://cn.vuejs.org/) 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：

- 嵌套的路由/视图表
- 模块化的、基于组件的路由配置
- 路由参数、查询、通配符
- 基于 Vue.js 过渡系统的视图过渡效果
- 细粒度的导航控制
- 带有自动激活的 CSS class 的链接
- HTML5 历史模式或 hash 模式，在 IE9 中自动降级
- 自定义的滚动条行为

》》》先下载

```node
npm install --save vue-router
```

> 基本使用

```
在src文件下新建router后再router里新建index.js
|-src
   |-router
        |-index.js
```

> 后再index.js里配置路由

```javascript
//index.js
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  routes: [
    {
      //path: "/",            //在这里配置路由
      //name: "home",
      //component: home,
      //meta: {
      //  keepAlive: true,
      // },
    },
  ],
});

```

> 后在main.js里挂载路由

```javascript
//main.js
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

```

然后就可以使用啦(๑•̀ㅂ•́)و✧

