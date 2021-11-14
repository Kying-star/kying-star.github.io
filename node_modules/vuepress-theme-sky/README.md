# Vuepress 博客主题

继承自[@vuepress/theme-blog](https://github.com/ulivz/vuepress-theme-blog)

## 主题特点

1. 添加了评论功能，使用`gitalk`插件实现评论。
2. 优化了样式。
3. 兼容`@vuepress/theme-blog`所有配置。
4. 兼容`gitalk`所有配置。
5. 添加赞赏功能，可配置赞赏二维码。

## 配置

```javascript
module.exports = {
  themeConfig: {
    // gitalk 配置
    commentConfig: {
      clientID: '',
      clientSecret: '',
      repo: 'rats',
      owner: 'lihaizhong',
      admin: ['lihaizhong']
    }
  }
}
```

## 扩展

``` text
::: quote
编写的内容
:::
```

quote: 引述的内容，一般用于引用别人的话。

``` text
::: tips
编写的内容
:::
```

tips: 一般用于提示信息

``` text
::: warning
编写的内容
:::
```

warning: 一般用于警告信息

``` text
::: danger
编写的内容
:::
```

danger: 一般用于非常重要的提示

**注意：**`commentConfig`的具体配置与`gitalk`一致。
