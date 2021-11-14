<template>
  <div class="search-box cb_business--placeholder">
    <div class="cursor "></div>
    <input
      @input="query = $event.target.value"
      aria-label="Search"
      :value="query"
      :class="{ 'focused': focused }"
      autocomplete="off"
      spellcheck="false"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
      placeholder="search"
    >
    <ul
      class="suggestions"
      v-if="showSuggestions"
      :class="{ 'align-right': alignRight }"
      @mouseleave="unfocus"
    >
      <li
        class="suggestion"
        v-for="(s, i) in suggestions"
        :class="{ focused: i === focusIndex }"
        @mousedown="go(i)"
        @mouseenter="focus(i)"
      >
        <a
          :href="s.path"
          @click.prevent
        >
          <span class="page-title">{{ s.title || s.path }}</span>
          <span
            v-if="s.header"
            class="header"
          >&gt; {{ s.header.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS */
export default {
  data () {
    return {
      query: '',
      focused: false,
      focusIndex: 0
    }
  },

  computed: {
    showSuggestions () {
      return (
        this.focused
        && this.suggestions
        && this.suggestions.length
      )
    },

    suggestions () {
      const query = this.query.trim().toLowerCase()
      if (!query) {
        return
      }

      const { pages } = this.$site
      const max = SEARCH_MAX_SUGGESTIONS
      const localePath = this.$localePath
      const matches = item => (
        item.title
        && item.title.toLowerCase().indexOf(query) > -1
      )
      const res = []
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break
        const p = pages[i]
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue
        }

        // filter out results that do not match searchable paths
        if (!this.isSearchable(p)) {
          continue
        }

        if (matches(p)) {
          res.push(p)
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break
            const h = p.headers[j]
            if (matches(h)) {
              res.push(Object.assign({}, p, {
                path: p.path + '#' + h.slug,
                header: h
              }))
            }
          }
        }
      }
      return res
    },

    // make suggestions align right when there are not enough items
    alignRight () {
      const navCount = (this.$site.themeConfig.nav || []).length
      const repo = this.$site.repo ? 1 : 0
      return navCount + repo <= 2
    }
  },

  methods: {
    getPageLocalePath (page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },

    isSearchable (page) {
      let searchPaths = SEARCH_PATHS

      // all paths searchables
      if (searchPaths === null) { return true }

      searchPaths = Array.isArray(searchPaths) ? searchPaths : new Array(searchPaths)

      return searchPaths.filter(path => {
        return page.path.match(path)
      }).length > 0
    },

    onUp () {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.suggestions.length - 1
        }
      }
    },

    onDown () {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },

    go (i) {
      if (!this.showSuggestions) {
        return
      }
      this.$router.push(this.suggestions[i].path)
      this.query = ''
      this.focusIndex = 0
    },

    focus (i) {
      this.focusIndex = i
    },

    unfocus () {
      this.focusIndex = -1
    }
  }
}
</script>

<style lang="stylus">
// .cb_business--placeholder::before {
// content: '';
// position: absolute;
// top: 0px;
// display: inline-block;
// width: 2px;
// height: 100%;
// animation: blink 1s infinite steps(1, start);
// background-color: #3eaf7c;
// }
// .cb_business--placeholder-before {
// color: #c7c7c7;
// font-size: 60px;
// }
// .cb_business--placeholder-after::after {
// content: '';
// position: absolute;
// top: 0;
// display: inline-block;
// width: 2px;
// height: 100%;
// animation: blink 1s infinite steps(1, start);
// }
// .cb_business--placeholder, .cb_business--placeholder-after {
// position: relative;
// }
// @keyframes blink {
// 0% {
// background-color: #3eaf7c;
// }
// 50% {
// background-color: transparent;
// }
// 100% {
// background-color: #3eaf7c;
// }
// }
.search-box {
  display: inline-block;
  position: relative;
  margin-right: 1rem;
  margin-top: 10px;
  .cursor {
    position: absolute;
    text-align: center;
    width: 2px;
    height: 100%;
    // text-indent: 10px;
    // background: red;
    top: 0;
    left: 0;
    &::before {
      content: '';
      position: absolute;
      top: 5px;
      left: 0;
      display: inline-block;
      width: 2px;
      height: 25px;
      animation: blink 1s infinite steps(1, start);
      background-color: #3eaf7c;
    }
  }
  input {
    cursor: text;
    width: 100px;
    height: 2rem;
    color: lighten($textColor, 25%);
    display: inline-block;
    border: 1px solid darken($borderColor, 10%);
    border-radius: 2rem;
    font-size: 1rem;
    line-height: 2rem;
    padding: 0 0.5rem 0 6px;
    outline: none;
    transition: all 0.2s ease;
    background-size: 1rem;
    letter-spacing: 2px;
    caret-color: #3eaf7c;
    text-align: left;
    &:focus {
      cursor: auto;
      border-color: $accentColor;
      width: 250px;
    }
  }
  .suggestions {
    background: #fff;
    width: 20rem;
    position: absolute;
    top: 1.5rem;
    border: 1px solid darken($borderColor, 10%);
    border-radius: 2px;
    padding: 0.4rem;
    list-style-type: none;
    &.align-right {
      right: 0;
    }
  }
  .suggestion {
    line-height: 1.4;
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    cursor: pointer;
    a {
      white-space: normal;
      color: lighten($textColor, 35%);
      .page-title {
        font-weight: 600;
      }
      .header {
        font-size: 0.9em;
        margin-left: 0.25em;
      }
    }
    &.focused {
      background-color: #f3f4f5;
      a {
        color: $accentColor;
      }
    }
  }
}
@media (max-width: $MQNarrow) {
  .search-box {
    input {
      cursor: pointer;
      width: 0;
      border-color: transparent;
      position: relative;
      &:focus {
        cursor: text;
        left: 0;
        width: 250px;
      }
    }
  }
}
// Match IE11
@media all and (-ms-high-contrast: none) {
  .search-box input {
    height: 2rem;
  }
}
@media (max-width: $MQNarrow) and (min-width: $MQMobile) {
  .search-box {
    .suggestions {
      left: 0;
    }
  }
}
@media (max-width: $MQMobile) {
  .search-box {
    margin-right: 0;
    input {
      left: 1rem;
    }
    .suggestions {
      right: 0;
    }
  }
}
@media (max-width: $MQMobileNarrow) {
  .search-box {
    .suggestions {
      width: calc(100vw - 4rem);
    }
    input:focus {
      width: 8rem;
    }
  }
}
</style>
