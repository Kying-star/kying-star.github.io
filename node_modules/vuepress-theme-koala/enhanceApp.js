import Layout from 'ant-design-vue/lib/layout'
import Tag from 'ant-design-vue/lib/tag'
import 'ant-design-vue/lib/layout/style/index.css'
import 'ant-design-vue/lib/tag/style/index.css'

export default ({ Vue, isServer }) => {
  Vue.use(Layout)
  Vue.use(Tag)
}
