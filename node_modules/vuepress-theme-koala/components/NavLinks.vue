<template>
  <nav
    class="nav-links"
    v-if="userLinks.length || repoLink"
  >
    <template>
      <!-- user links -->
      <div
        class="nav-item"
        v-for="item in userLinks"
        :key="item.link"
      >
        <DropdownLink
          v-if="item.type === 'links'"
          :item="item"
        />
        <NavLink
          v-else
          :item="item"
        />
      </div>

      <!-- repo link -->
      <a
        v-if="repoLink"
        :href="repoLink"
        class="repo-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ repoLabel }}
        <OutboundLink />
      </a>
      <!-- <div
        @click="searchShow=true"
        style="text-align:center;display:inline;cursor:pointer;float:right"
      >
        <a-icon
          type="search"
          style="font-size:20px;margin-top:8px"
        />

      </div> -->
    </template>
    <!-- <div class="shearchbox">
      <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      />
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />

    </div> -->

  </nav>

</template>

<script>
import DropdownLink from '@theme/components/DropdownLink.vue'
import { resolveNavLinkItem } from '../util'
import NavLink from '@theme/components/NavLink.vue'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@theme/components/SearchBox'
export default {
  components: { NavLink, DropdownLink, AlgoliaSearchBox, SearchBox },
  data () {
    return {
      searchShow: false
    }
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    },
    userNav () {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },

    nav () {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...this.userNav, languageDropdown]
      }
      return this.userNav
    },

    userLinks () {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    },

    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
    },

    repoLabel () {
      if (!this.repoLink) return
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platforms = ['GitHub', 'GitLab', 'Bitbucket']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }

      return 'Source'
    }
  }
}
</script>

<style lang="stylus">
.nav-links {
  // display: inline-block;
  width: 100%;
  text-align: center;
  position: relative;
  .shearchbox {
    position: absolute;
    top: 100px;
    width: 100%;
    left: 0;
    background: #111;
  }
  a {
    line-height: 1.4rem;
    color: inherit;
    &:hover, &.router-link-active {
      // color $accentColor
      color: #2cb464;
    }
  }
  .nav-item {
    position: relative;
    display: inline-block;
    margin-left: 1.5rem;
    line-height: 2rem;
    &:first-child {
      margin-left: 0;
    }
  }
  .repo-link {
    margin-left: 1.5rem;
  }
}
@media (max-width: $MQMobile) {
  .nav-links {
    .nav-item, .repo-link {
      margin-left: 0;
    }
  }
}
@media (min-width: $MQMobile) {
  .nav-links a {
    &:hover, &.router-link-active {
      color: #2cb464;
    }
  }
  .nav-item > a:not(.external) {
    &:hover, &.router-link-active {
      margin-bottom: -2px;
      border-bottom: 2px solid lighten(#2cb464, 8%);
    }
  }
}
</style>
