<template>
  <RouterLink
    v-if="isInternal"
    class="nav-link"
    :to="link"
    :exact="exact"
    @focusout.native="focusoutAction"
  >
    <i class="iconfont" :class="item.icon">
      <span :class="subItemClass">{{ item.text }}</span>
    </i>
  </RouterLink>
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="target"
    :rel="rel"
    @focusout="focusoutAction"
  >
    <!-- {{ item.text }} -->
    <i class="iconfont" :class="item.icon">
      <span :class="subItemClass">{{ item.text }}</span>
    </i>
    <OutboundLink v-if="isBlankTarget" />
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from "@parent-theme/util";

export default {
  name: "NavLink",

  props: {
    item: {
      required: true
    },
    isSubItem: {
      tyep: Boolean,
      default: false
    }
  },

  computed: {
    link() {
      return ensureExt(this.item.link);
    },

    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(
          rootLink => rootLink === this.link
        );
      }
      return this.link === "/";
    },

    isNonHttpURI() {
      return isMailto(this.link) || isTel(this.link);
    },

    isBlankTarget() {
      return this.target === "_blank";
    },

    isInternal() {
      return !isExternal(this.link) && !this.isBlankTarget;
    },

    target() {
      if (this.isNonHttpURI) {
        return null;
      }
      if (this.item.target) {
        return this.item.target;
      }
      return isExternal(this.link) ? "_blank" : "";
    },

    rel() {
      if (this.isNonHttpURI) {
        return null;
      }
      if (this.item.rel) {
        return this.item.rel;
      }
      return this.isBlankTarget ? "noopener noreferrer" : "";
    },
    // add
    subItemClass() {
      return {
        subitem: this.isSubItem
      };
    }
  },

  methods: {
    focusoutAction() {
      this.$emit("focusout");
    }
  }
};
</script>

<style lang="stylus">
.nav-link {
  .iconfont {
    font-size 0.9rem
    span {
      // font-weight 600 // custom
      margin-left 5px
      &.subitem {
        font-weight 500
      }
    }
  }
}
</style>
