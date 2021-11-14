# vue配置代理服务器

------

1. 首先在 vue.config.js 里

```javascript
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/game/Resource_Station_verfication/"  //这里填你建立的仓库名
      : "/",
  outputDir: "build",
  devServer: {
    proxy: {
      "/api": {
        target: "https://cyxbsmobile.redrock.team/wxapi/rk-media-server", //你要跨域的网址  比如  'http://news.baidu.com',
        // secure: true, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //这个参数是用来回避跨站问题的，配置完之后发请求时会自动修改http header里面的host，但是不会修改别的
        pathRewrite: {
          "^/api": "", //路径的替换规则
          //这里的配置是正则表达式，以/api开头的将会被用用‘/api’替换掉，假如后台文档的接口是 /api/list/xxx
          //前端api接口写：axios.get('/api/list/xxx') ， 被处理之后实际访问的是：http://news.baidu.com/api/list/xxx
        },
      },
    },
  },
};
```

2. 然后在 main.js 里引入

```javascript
import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
Vue.prototype.$axios = axios;
(axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://cyxbsmobile.redrock.team/wxapi/rk-media-server"
    : "/api"), //关键代码设置代理baseurl,用的axios
  (Vue.config.productionTip = false);

new Vue({
  render: (h) => h(App),
}).$mount("#app");

```

3.使用的时候

```javascript
      this.$axios({
        method: "post",
        url: "/username_is",
        data: {
          username: this.username,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((e) => {
          console.log(e);
        })
        .catch((Error) => {
          console.log(Error);
        });
```

