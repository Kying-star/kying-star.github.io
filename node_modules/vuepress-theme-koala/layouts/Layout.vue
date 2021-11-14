<template>
  <div style="height:100%">
    <header>
    </header>
    <componen
      class="main-content"
      :is="layout"
    />
  </div>
</template>

<script>
import home from './Home'
import post from './Post'

export default {

  computed: {
    layout () {
      const { path } = this.$page
      if (path !== '/' && path !== '/zh/') {
        return post
      } else {
        return home
      }
    },
  }
}
</script>
<style>
.ant-layout-sider {
  min-height: 100vh !important;
}
</style>


