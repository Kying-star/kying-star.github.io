<template>
  <header class="navbar">
    <!-- <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" /> -->
    <router-link
      :to="$localePath"
      class="home-link"
    >
      <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      >
      <span
        ref="siteName"
        class="site-name"
        v-if="$siteTitle"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span>
    </router-link>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >

      <NavLinks class="can-hide" />
    </div>
    <div style="text-align:center">
      <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      />
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@theme/components/SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import $ from 'jquery'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
    var t1 = 0
    window.addEventListener('scroll', function () {
      var t2 = document.documentElement.scrollTop || document.body.scrollTop;
      let el = $('.navbar')
      if (t2 > t1) {
        if (t2 > 200) {
          el.css({
            'top': '-100px',
            'position': 'fixed',
            'transition': '0'
          })
        } else {
          el.css({
            'top': -t2 + 'px',
            'position': 'absoule',
            'transition': '0'
          })
        }
      } else {
        if (t2 > 200) {
          el.css({
            'top': '0',
            'position': 'fixed',
            'transition': '.2s'
          })
        } else {
          el.css({
            'top': '0',
            'position': 'fixed',
            'transition': '0'
          })
        }
      }
      t1 = t2
    }, false)


  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem;
$navbar-horizontal-padding = 1.5rem;
.search-box {
  background: none;
  input {
    background: none;
    color: #fff;
    // text-align: center;
    border: none;
    min-width: 100px;
  }
}
.navbar {
  padding: $navbar-vertical-padding $navbar-horizontal-padding;
  line-height: $navbarHeight - 1.4rem;
  background-color: #001529;
  // background: url('../layouts/bg10.png');
  a, span, img {
    display: inline-block;
  }
  .logo {
    height: $navbarHeight - 1.4rem;
    min-width: $navbarHeight - 1.4rem;
    margin-right: 0.8rem;
    vertical-align: top;
  }
  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: $textColor;
    position: relative;
  }
  .links {
    width: 100%;
    padding-left: 1.5rem;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    right: $navbar-horizontal-padding;
    top: $navbar-vertical-padding;
    display: flex;
    flex: 1;
    margin: 0 auto;
    color: #f8f8f8;
    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }
  }
}
@media (max-width: $MQMobile) {
  .navbar {
    padding-left: 4rem;
    .can-hide {
      display: none;
    }
    .links {
      padding-left: 1.5rem;
    }
  }
}
</style>
