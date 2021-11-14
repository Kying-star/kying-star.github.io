<template>
  <div
    class="theme-container my-home"
    :class="pageClasses"
    style="height:auto"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />
    <div style="width:100%;height:100%">
      <div class="home-container">
        {{$page.excerpt}}
        <div class="list-content">
          <template v-for="item in $site.pages">
            <router-link
              :to="item.path"
              v-if="item.title&&item.path!='/'"
            >
              <div class="list-main">
                <div class="left">
                  <h2>{{item.title}}</h2>
                  <p class="time">{{item.lastUpdated}}

                  </p>
                  <p class="desc">{{ filterTag(item.excerpt)}}</p>
                  <p> <template v-if="splitTags(item.frontmatter.tag).length">
                      <a-tag v-for="tag in splitTags(item.frontmatter.tag)">#{{tag}}</a-tag>
                    </template></p>
                </div>
                <div
                  class="right "
                  v-if="item.frontmatter.poster"
                >
                  <img
                    :src="item.frontmatter.poster"
                    alt=""
                  >
                </div>
              </div>
            </router-link>
          </template>
          <!-- {{this.$site.pages}} -->
        </div>
        <div class="more-content hidden-md-and-down">
          <div class="tags-box">
            <div class="title">标签</div>
            <div class="body">
              <a-tag v-for="tag in tags">#{{tag.tagName}} {{tag.count}}</a-tag>
              <!-- {{tags}} -->
            </div>
          </div>
          <!-- <div>
            <span>关于·</span>
            <span>建议反馈</span>
          </div> -->
        </div>
      </div>
      <div style="height:200px"></div>
    </div>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'
import $ from 'jquery'
import _ from 'loadsh'

export default {
  components: { Home, Page, Sidebar, Navbar },

  data () {
    return {
      isSidebarOpen: false
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

    tags () {
      let tags = []
      this.$site.pages.filter(v => {
        let tagText = v.frontmatter.tag
        if (tagText) {
          v.tagList = tagText.split(',').map(s => {
            return s.trim()
          })
          tags.push(v.tagList)
          return v
        }
      })
      tags = _.flattenDeep(tags, 1)
      let tagsO = []
      tags.sort()
      for (var i = 0; i < tags.length;) {//按照属性判断属性合并列数
        var count = 0;
        for (var j = i; j < tags.length; j++) {
          if (tags[i] == tags[j]) {
            count++;
          }
        }
        tagsO.push({
          tagName: tags[i],
          count: count
        })
        i += count;
      }
      return tagsO
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
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })

    let t1 = 0
    $(document).on('scroll', function () {
      let t2 = $(document).scrollTop()
      let el = $('.tags-box')

      let navbarHeight = 100
      let contentPaddingTop = 20
      if (t2 > t1) {
        if (t2 > navbarHeight) {
          el.css({
            'top': '0',
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
        if (t2 > navbarHeight) {
          el.css({
            'top': navbarHeight + 'px',
            'position': 'fixed',
            'transition': '.2s'
          })
        } else {
          el.css({
            'top': navbarHeight + contentPaddingTop + 'px',
            'position': 'fixed',
            'transition': '0.2s'
          })
        }
      }
      t1 = t2

    })
  },

  methods: {
    filterTag (text = '') {
      var reg = /<[^<>]+>/g;
      return text.replace(reg, '');
    },
    splitTags (tag = '') {
      return tag.split(',').filter(v => {
        if (v) {
          return v
        }
      })
    },
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
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
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
<style lang="stylus">
.ant-tag {
  border: none !important;
}
.my-home {
  background: #f4f5f5;
}
.home-container {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  padding-top: 120px;
}
.list-content {
  max-width: 700px;
  margin: 0 auto;
  flex: 1;
  padding: 60px 0 0 0;
  margin-right: 20px;
  background: #fff;
  .list-main {
    border-bottom: 1px solid rgb(238, 238, 238, 0.5);
    padding: 10px 20px 0 20px;
    display: flex;
    cursor: pointer;
    .left {
      flex: 1;
    }
    .right {
      width: 100px;
      height: 100px;
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
    &:hover {
      h2 {
        color: #3eaf7c;
      }
    }
    .time {
      color: #ccc;
      margin: 0;
    }
    h2 {
      font-size: 22px;
      color: #444;
      border: none;
      margin: 0;
      padding: 0;
    }
    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      margin-bottom: 6px;
      padding-right: 10px;
    }
  }
}
.more-content {
  width: 240px;
  // background: #eee;
  .tags-box {
    width: 240px;
  }
  .title {
    font-size: 14px;
    color: #444;
    padding: 10px 20px;
    border-bottom: 1px solid #f8f8f8;
    background: #fff;
  }
  .body {
    padding: 20px;
    background: #fff;
    .ant-tag {
      margin-bottom: 6px;
    }
  }
}
</style>

