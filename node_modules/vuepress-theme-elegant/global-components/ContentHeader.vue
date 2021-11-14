<template>
    <div class="content-header index-header">
        <div class="container fade-scale in">
            <!-- 主页 -->
            <div v-show="isMain">
                <div class="title">
                    <span>{{title}}</span>
                    <div class="title-prefx-wrap">
                        <span>的</span>
                    </div>
                    <span>个人博客</span>
                </div>
                <div class="subtitle">
                    {{description}}
                </div>
            </div>
            <!-- 详情页 -->
            <div v-show="isPost">
                <div class="title">
                    <span>{{title}}</span>
                </div>
                <div class="subtitle">
                    {{description}}
                </div>
            </div>
            <!-- 标签分类 -->
            <div v-show="isTag">
                <div class="title">
                    <span>{{title}}</span>
                </div>
                <div class="subtitle">
                    该标签下共有<span class="subtitle-number">{{tagContentCount}}</span>篇文章
                </div>
            </div>
            <!-- 时间归档 -->
            <div v-show="isAll">
                <div class="title">
                    <span>{{title}}</span>
                </div>
                <div class="subtitle">
                    {{description}}
                </div>
            </div>
            <!-- 自我介绍 -->
            <div v-show="isAbout">
                <div class="title">
                    <span>{{title}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import tagsList from "imData/tagsList.js";
    import Bus from "imUtils/Bus";

    export default {
        name: "FixedHeader",
        data() {
            return {
                description: "",
                isMain: true,
                isPost: false,
                isTag: false,
                isAbout: false,
                isAll: false,
                tagName: "",
                tagContentCount: 0
            };
        },
        props: {
            content: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            title() {
                let t = "";

                if (this.$route.path === '/') {
                    this.isMain = true;
                    this.isPost = false;
                    this.isTag = false;
                    this.isAbout = false;
                    this.isAll = false;
                }

                switch (this.$route.path.slice(1, 6)) {
                    // 主页
                    case "posts":
                        this.isMain = false;
                        this.isPost = true;
                        this.isTag = false;
                        this.isAbout = false;
                        this.isAll = false;
                        t = this.$page.title;
                        this.description = this.$page.lastUpdated
                            ? "最后更新时间：" + this.$page.lastUpdated
                            : "";
                        break;

                    // 标签分类
                    case "tags/":
                        this.isMain = false;
                        this.isPost = false;
                        this.isTag = true;
                        this.isAbout = false;
                        this.isAll = false;
                        const paths = this.$route.path.split('/')[2];
                        if (paths.length > 0) {
                            t = paths;
                        } else {
                            const tags = [];
                            for (const tag in tagsList) {
                                tags.push(tag);
                            }
                            if (this.tagName.length === 0) {
                                t = t + tags[0];
                            } else {
                                t = t + this.tagName;
                            }
                        }
                        this.tagContentCount = tagsList[t].length - 1;
                        break;

                    // 时间归档
                    case "all/":
                        this.isMain = false;
                        this.isPost = false;
                        this.isTag = false;
                        this.isAbout = false;
                        this.isAll = true;
                        t = this.$themeConfig.menus.all || "时间归档";
                        if (this.content.length === 0) {
                            return (this.description = "");
                        }
                        setTimeout(() => {
                            this.description =
                                this.content[this.content.length - 1].lastUpdated.slice(0, 7) +
                                "~" +
                                this.content[0].lastUpdated.slice(0, 7) +
                                " 这段期间共写了" +
                                this.content.length +
                                "篇文章";
                        }, 20);
                        break;

                    // 自我介绍
                    case "about":
                        this.isMain = false;
                        this.isPost = false;
                        this.isTag = false;
                        this.isAbout = true;
                        this.isAll = false;
                        t = this.$themeConfig.menus.about || "自我介绍";
                        this.description = "";
                        break;

                    default:
                        this.isMain = true;
                        this.isPost = false;
                        this.isTag = false;
                        this.isAbout = false;
                        this.isAll = false;
                        t = this.$themeConfig.author || "欢迎光临";
                        this.description = this.$site.description || "期待与你的交流";
                }
                return t;
            }
        },
        mounted() {
            Bus.$on("changeContentHeader", tagName => {
                this.tagName = tagName;
                this.tagContentCount = tagsList[tagName].length - 1;
            });
        }
    };
</script>
<style lang="scss" scoped>
    .content-header {
        position: relative;
        top: 8px;
        margin-left: 40px;
        width: 100%;
        color: #fff;
    }

    .content-header .title {
        height: 50px;
        font-size: 30px;
        display: flex;
        align-items: center;
        letter-spacing: 1px;
    }

    .subtitle-number {
        opacity: 1 !important;
        font-weight: bold !important;
    }

    .title-prefx-wrap {
        position: relative;
        top: 2px;
        margin: 0 6px;
        font-size: 20px;
        width: 36px;
        height: 36px;
        line-height: 37px;
        border-radius: 18px;
        text-align: center;
        display: inline-block;
        border: 1px solid transparent;
        background-color: rgba(0, 0, 0, .2);
    }

    .content-header .subtitle {
        padding: 8px 0;
        font-weight: 500;
        color: #ffffff;
        opacity: 0.5;
        font-size: 14px;
    }

    @media only screen and (max-width: 767px) {
        .content-header {
            margin-left: 0;
            padding-left: 21px;
            width: auto;
        }
        .content-header .title {
            display: block;
            font-size: 28px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .title-prefx-wrap {
            position: relative;
            top: -2px;
            margin: 0 -5px;
        }
    }

</style>