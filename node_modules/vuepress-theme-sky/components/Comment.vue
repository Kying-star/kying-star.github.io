<template>
  <section
    id="comments"
    ref="comments"
    class="comments"
  />
</template>

<script>
import 'gitalk/dist/gitalk.css';
import GitTalk from 'gitalk';

export default {
  name: 'Comment',
  mounted() {
    this.$nextTick(this.createComment.bind(this));
  },
  methods: {
    createComment() {
      const config = this.$themeConfig.commentConfig || {};
      const { clientID, clientSecret } = config;

      if (typeof window !== 'undefined' && clientID && clientSecret) {
        const options = Object.assign(
          {
            id: location.pathname, // Ensure uniqueness and length less than 50
            distractionFreeMode: false // Facebook-like distraction free mode
          },
          config
        );
        const gitTalk = new GitTalk(options);

        gitTalk.render(this.$refs['comments'] || 'comments');
      } else {
        this.$destroy();
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
  .comments {
    margin-top: 40px;
    padding: 10px;
    background: #fff;

    &:empty:before {
      content: '正在加载评论, 请稍等...';
      display: block;
      text-align: center;
      color: #999;
    }
  }
</style>
