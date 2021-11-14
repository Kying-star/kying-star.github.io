<template></template>
<script>
export default {
  methods: {
    init() {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js";
      script.charset = "utf-8";
      script.setAttribute("homePageUrl", "/");
      script.setAttribute("homePageName", "返回首页");
      document.head.appendChild(script);
    }
  },
  mounted() {
    this.init();
  }
};
</script>
