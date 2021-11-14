<template>

  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >

    <transition name="loading">

      <div class="LoadingLine" v-if="loading"></div>

    </transition>

    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >

      <template #top>

        <slot name="sidebar-top" />

      </template>

      <template #bottom>

        <slot name="sidebar-bottom" />

      </template>

    </Sidebar>

    <Home v-if="$page.frontmatter.home" />

    <Page
      v-else
      :sidebar-items="sidebarItems"
    >

      <template #top>

        <slot name="page-top" />

      </template>

      <template #bottom>

        <div>

          <slot name="page-bottom" />
          <Footer />

        </div>

      </template>

    </Page>

  </div>

</template>

<script>

  import Home from '@theme/components/Home.vue'
  import Navbar from '@theme/components/Navbar.vue'
  import Page from '@theme/components/Page.vue'
  import Sidebar from '@theme/components/Sidebar.vue'
  import Footer from '@theme/components/Footer.vue'
  import { resolveSidebarItems } from '../util'

  export default {

    name: 'Layout',
    components: {

      Home,
      Page,
      Sidebar,
      Navbar,
      Footer

    },
    data () {

      return {

        isSidebarOpen: false,
        loading: false

      }

    },
    computed: {

      shouldShowNavbar () {

        const { themeConfig } = this.$site
        const { frontmatter } = this.$page

        if (
          frontmatter.navbar === false
          || themeConfig.navbar === false) {

          return false

        }
        return (

          this.$title
          || themeConfig.logo
          || themeConfig.repo
          || themeConfig.nav
          || this.$themeLocaleConfig.nav

        )

      },
      shouldShowSidebar () {

        const { frontmatter } = this.$page
        return (

          !frontmatter.home
          && frontmatter.sidebar !== false
          && this.sidebarItems.length

        )

      },
      sidebarItems () {

        return resolveSidebarItems(

          this.$page,
          this.$page.regularPath,
          this.$site,
          this.$localePath

        )

      },
      pageClasses () {

        const userPageClass = this.$page.frontmatter.pageClass
        return [

          {

            'no-navbar': !this.shouldShowNavbar,
            'sidebar-open': this.isSidebarOpen,
            'no-sidebar': !this.shouldShowSidebar

          },
          userPageClass

        ]

      }

    },
    mounted () {

      this.showLoading()
      this.$router.afterEach(() => {

        this.isSidebarOpen = false

      })

    },
    methods: {

      showLoading () {

        this.loading = true
        setTimeout(() => (this.loading = false), 440)

      },
      toggleSidebar (to) {

        this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
        this.$emit('toggle-sidebar', this.isSidebarOpen)

      },
      onTouchStart (e) {

        this.touchStart = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY
        }

      },
      onTouchEnd (e) {

        const dx = e.changedTouches[0].clientX - this.touchStart.x
        const dy = e.changedTouches[0].clientY - this.touchStart.y

        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {

          if (dx > 0 && this.touchStart.x <= 80) {

            this.toggleSidebar(true)

          } else {

            this.toggleSidebar(false)

          }

        }

      }

    },
    watch: {

      $route(to, from) {

        if (to.path === from.path) return
        this.showLoading()

      }

    }

  }

</script>

<style lang="stylus">

  ::selection
    background $accentColor
    color #fff

  ::-moz-selection
    background $accentColor
    color #fff

  body, input, button, textarea
    font-family BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif

  .LoadingLine
    position fixed
    top 0
    left 0
    width 100vw
    height 3px
    z-index 10000000
    opacity 1
    background linear-gradient(271deg, $accentColor, #fdbb2d)
    background-size 400% 400%
    -webkit-animation nestGradient 6s ease infinite
    -moz-animation nestGradient 6s ease infinite
    animation nestGradient 6s ease infinite

  .loading-enter-active, .loading-enter-to-active
    transition width 0.43s, opacity 0.47s ease

  .loading-leave-active, .loading-leave-to-active
    transition opacity 0.23s ease

  .loading-enter
    width 0
    opacity 0

  .loading-enter-to, .loading-leave
    width 100vw
    opacity 1

  .loading-leave-to
    width 100vw
    opacity 0

</style>