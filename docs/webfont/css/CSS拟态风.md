## CSS 拟态风

原理:**两个阴影叠加**

废话不多说,直接上代码。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        background: #ecf0f3;
      }
      div {
        position: relative;
        float: left;
        width: 200px;
        height: 200px;
        margin-left: 80px;
        margin-top: 80px;
        background: #ecf0f3;
      }
      .drop-shadow {
        border-radius: 20px;
        box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #fff;
      }
      .inner-shadow {
        border-radius: 20px;
        box-shadow: inset 18px 18px 30px #d1d9e6, inset -18px -18px 30px #fff;
      }
      .inner-shadow-ring {
        border-radius: 100%;
        box-shadow: inset 9px 9px 15px #d1d9e6, inset -9px -9px 15px #fff;
      }
      .inner-shadow-ring:before {
        content: "";
        position: absolute;
        left: 20%;
        top: 20%;
        width: 60%;
        height: 60%;
        border-radius: 100%;
        background: #ecf0f3;
        box-shadow: 9px 9px 15px #d1d9e6, -9px -9px 15px #fff;
      }
    </style>
  </head>
  <body>
    <div class="drop-shadow"></div>
    <div class="inner-shadow"></div>
    <div class="inner-shadow-ring"></div>
  </body>
</html>
```

核心代码

```css
box-shadow: 9px 9px 15px #d1d9e6, -9px -9px 15px #fff;
```

效果图

<img :src="$withBase('/img/nitai.png')" alt="mixureSecure">

[摘自](https://mkblog.cn/2081/comment-page-1/)

[拟态网站](https://neumorphism.io/#b8e1ed)
