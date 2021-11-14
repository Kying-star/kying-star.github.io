const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
  permalink: '/:year/:month/:day/:slug',
  alias() {
    const { themeConfig, siteConfig } = ctx
    // resolve algolia
    const isAlgoliaSearch =
      themeConfig.algolia ||
      Object.keys((siteConfig.locales && themeConfig.locales) || {}).some(
        base => themeConfig.locales[base].algolia
      )
    return {
      '@AlgoliaSearchBox': isAlgoliaSearch
        ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
        : path.resolve(__dirname, 'noopModule.js')
    }
  },

  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/search',
    '@vuepress/plugin-nprogress',
    ['@vuepress/container', { type: 'tip' }],
    ['@vuepress/container', { type: 'warning' }],
    ['@vuepress/container', { type: 'danger' }],
    ['@vuepress/blog']
    // [
    //   '@vssue/vuepress-plugin-vssue',
    //   {
    //     // 设置 `platform` 而不是 `api`
    //     platform: 'github',

    //     // 其他的 Vssue 配置
    //     owner: 'artiely',
    //     repo: 'my-vuepress',
    //     clientId: 'd12b512d8d27730f6520',
    //     clientSecret: 'b11bafe7163bbb77d4a2cbc61bd3ca15ce7e249b'
    //   }
    // ]
  ]
})
