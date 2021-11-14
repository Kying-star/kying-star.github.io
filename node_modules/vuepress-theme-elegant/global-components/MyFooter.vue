<template>
    <el-row class="container-footer" :style="{backgroundColor: footerBgColor}">
        <el-row
            :class="{footerMargin: !isHide}"
            type="flex"
            justify="center"
            align="center"
            class="footer-warp"
        >
            <el-col
                :span="24"
                class="footer-top"
            >
                <p class="ellipsis">
                    <span>
                        博客内容遵循
                        <a
                            rel="license"
                            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
                        >知识共享 署名 - 非商业性 - 相同方式共享 4.0 国际协议</a>
                    </span>
                </p>
            </el-col>
            <el-col
                :span="24"
                class="footer-bottom"
            >
                <p class="ellipsis">
                    <span v-if="content.length !== 0">
                        <span>
                          {{($site.title + '的个人博客' || "")
                          + ' © '
                          +content[content.length - 1].lastUpdated.slice(0, 7)
                          +" ~ "
                          +content[0].lastUpdated.slice(0, 7)}}
                        </span>
                    </span>
                    <span>
                        Power by
                        <a
                            href="https://v0.vuepress.vuejs.org/zh/"
                            target="_blank"
                        >VuePress</a> Theme
                        <a
                            href="https://github.com/maoyuanjun/vuepress-theme-elegant"
                            target="_blank"
                        >elegant</a>
                    </span>
                </p>
            </el-col>
        </el-row>
    </el-row>
</template>
<script>

    import themeStyle from '../style/index';

    export default {
        name: "MyFooter",
        props: {
            isHide: {
                type: Boolean,
                default: false
            },
            content: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            footerBgColor() {
                const style = this.$themeConfig.style || 'classical';
                return themeStyle[style].color;
            }
        }
    };
</script>
<style lang="stylus" scoped>

    .container-footer {
        padding-top: 30px ;
        padding-bottom: 25px;
        overflow: hidden;
        text-align: center;
        width: 100%;
        line-height: 1.6;
        .footerMargin .footer-top, .footerMargin .footer-bottom {
            margin-left: 122px;
        }

        a {
            color: rgba(255, 255, 255, 0.88);
            border-bottom: 1px dotted rgba(255, 255, 255, 0.5);
        }
        .footer-warp {
            flex-direction: column;
            opacity: 0.4;
            font-size: 14px;
            color: #FFFFFF;
            .footer-top, .footer-bottom {
                transition: 0.2s ease-in-out;
                p {
                    margin: 0;
                }
            }

            .footer-top {
                height: 30px;
            }
        }
    }

    @media only screen and (max-width: 767px) {
        .container-footer {
            display: none;
        }
    }

</style>