<template>

  <aside class="sidebar">

    <NavLinks />

    <div class="sidebar-elements">

      <h1 class="DocsTitle">Documentation</h1>

      <slot name="top" />

      <SidebarLinks
         :depth="0"
         :items="items"
      />

    </div>

    <slot name="bottom" />

  </aside>

</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: ['items']
}
</script>

<style lang="stylus">

  .sidebar

    h1.DocsTitle
      font-size 1.8em
      color rgba(0, 0, 0, .7)
      margin-bottom 10px

    ul
      padding 0
      margin 0
      list-style-type none

    a
      display inline-block

    .nav-links
      display none
      border-bottom 1px solid $borderColor
      padding 0.5rem 0 0.75rem 0

      a
        font-weight 600

      .nav-item, .repo-link
        display block
        line-height 1.25rem
        font-size 1.1em
        padding 0.5rem 0 0.5rem 1.5rem

    & > .sidebar-links
      padding 1.5rem 0

      & > li
        margin-top 0 !important
        margin 5px 0

        & > a.sidebar-link
          font-size 1em
          padding 0 0 0 1.25em

          &.active
            font-weight 400

      & > li:not(:first-child)
        margin-top .75rem

    .sidebar-elements
      position absolute
      left 50%
      transform translateX(-50%)

      .sidebar-links
        li
          margin-top 0 !important
          margin 5px 0

          a
            padding 0 0 0 1.25em
            font-size 1em

            &.active
              font-weight 400

  @media (max-width: $MQMobile)
    .sidebar
      .nav-links
        display block

        .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
          top calc(1rem - 2px)

      & > .sidebar-links
        padding 1rem 0

</style>
