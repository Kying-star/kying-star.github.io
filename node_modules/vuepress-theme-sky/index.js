module.exports = () => {
  const containers = [
    {
      type: 'quote',
      before: '<div class="quote custom-block">',
      after: '</div>'
    },
    {
      type: 'tip',
      defaultTitle: '提示'
    },
    {
      type: 'warning',
      defaultTitle: '注意'
    },
    {
      type: 'danger',
      defaultTitle: '危险'
    }
  ].map(options => ['container', options])

  return {
    extend: '@vuepress/theme-blog',
    plugins: [
      [
        '@vuepress/plugin-medium-zoom',
        {
          selector: '.vuepress-blog-theme-content img',
          options: { background: 'rgba(255, 255, 255, 0.6)' }
        }
      ]
    ].concat(containers)
  }
}
