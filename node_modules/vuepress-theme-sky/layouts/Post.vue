<template>
  <div id="vuperess-theme-blog__post-layout">
    <Content class="vuepress-blog-theme-content" />
    <Toc />
    <Donate />
    <Comment />
  </div>
</template>

<script>
import Toc from '@parent-theme/components/Toc.vue';
import Donate from '@theme/components/Donate.vue';
import Comment from '@theme/components/Comment.vue';

export default {
  components: {
    Toc,
    Donate,
    Comment
  }
};
</script>

<style lang="stylus">
  .vuepress-blog-theme-content {
    font-size: 16px;
    letter-spacing: 0px;
    font-family: PT Serif, Serif;
    color: #2c3e50;
    position: relative;

    @media (min-width: $MQNarrow) {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.07);
    }
  }
</style>
