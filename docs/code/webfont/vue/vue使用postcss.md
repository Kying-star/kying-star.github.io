## 使用 postcss 插件转换 px 为 vw 

### 安装

```javascript
npm i -S postcss-px-to-viewport
# or
yarn add postcss-px-to-viewport
```

### 配置

> 在`.postcssrc.js`中配置

```javascript
module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      // 基准 - 视窗宽度
      viewportWidth: 750,
      // 转换后单位所带的小数点位数
      unitPrecision: 5,
      // 转换后单位
      viewportUnit: "vw",
      // 转换后字体的单位
      fontViewportUnit: "vmin", // ???暂时无效
      // 忽略的样式名
      selectorBlackList: [".ignore", ".hairlines"],
      // 最小px
      minPixelValue: 1,
      // 是否转换媒体查询的px单位
      mediaQuery: false
    }
  }
}
```

[摘自](https://juejin.im/post/5c10e8386fb9a049e82b60e5#heading-1)

