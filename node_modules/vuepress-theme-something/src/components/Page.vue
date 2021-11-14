<template>
  <main class="page">
    <slot name="top" />

    <Card :canHover="false" class="post">
      <div class="info">
        <h1>{{$page.title}}</h1>
        <hr />
        <PostInfo :post="$page" :showTag="true" :showCount="true"></PostInfo>
      </div>

      <DefaultTransition delay="0.02">
        <Content v-show="showTransition" class="theme-default-content" />
      </DefaultTransition>

      <PageEdit class="page-edit"/>
      <PageNav v-bind="{ sidebarItems }" />

      <slot name="bottom" />

      <DefaultTransition delay="0.04">
        <Valine v-show="showTransition" class="comment" />
      </DefaultTransition>
    </Card>
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import PostInfo from "@theme/components/PostInfo.vue";
import DefaultTransition from "@theme/components/DefaultTransition.vue";
import transitonMixin from "@theme/mixins/transition";
import Card from "@theme/components/Card.vue";
export default {
  name: "Page",
  mixins: [transitonMixin],
  components: {
    PageEdit,
    PageNav,
    PostInfo,
    Card,
    DefaultTransition,
  },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus" scoped>
.page {
  padding-top 3.6rem
  padding-bottom 0rem
  display block
  .post {
    max-width 820px
    margin 0rem auto
    .info {
      padding 0rem 2.5rem
    }
    .comment {
      padding: 2rem 2.5rem
    }
  }
}
</style>
