<template>
    <el-aside
            class="menu"
            width="auto"
            :class="{ menuHide: isHide }"
    >
        <el-menu
                @select="select"
                :default-active="$route.path.slice(0, 7)"
                active-text-color="#3f51b5"
                class="menu-wrap"
        >
            <!-- 个人基本信息 -->
            <li>
                <div
                        class="brand-wrap"
                        :style="{backgroundImage : `url(${$withBase($themeConfig.brand || '')})`}"
                >
                    <div class="brand">
                        <router-link
                                to="/"
                                class="avatar waves-effect waves-circle waves-light"
                        >
                            <img :src="$withBase($themeConfig.avatar || '')">
                        </router-link>
                        <div class="introduce">
                            <div class="nickname">{{$themeConfig.author || '欢迎光临'}}</div>
                            <a
                                    :title="$themeConfig.email || '没有email'"
                                    class="mail"
                            >{{$themeConfig.email || '没有email'}}</a>
                        </div>
                    </div>
                </div>
            </li>
            <!-- 菜单信息 -->
            <el-menu-item
                index="/"
                :class="{
                    'classical-theme': isClassicalBg(),
                    'lively-theme': isLivelyBg(),
                    'deep-theme': isDeepBg(),
                    'fresh-theme': isFreshBg()
                }"
            >
                <span class="item-split-wrap"></span>
                <i class="iconfont icon-home"></i>
                <span
                        class="item-title"
                        slot="title"
                >{{$themeConfig.menus.home || '主页'}}</span>
            </el-menu-item>
            <el-menu-item
                index="/tags/"
                :class="{
                    'classical-theme': isClassicalBg(),
                    'lively-theme': isLivelyBg(),
                    'deep-theme': isDeepBg(),
                    'fresh-theme': isFreshBg()
                }"
            >
                <span class="item-split-wrap"></span>
                <i class="iconfont icon-biaoqian"></i>
                <span
                        class="item-title"
                        slot="title"
                >{{$themeConfig.menus.tags || '标签分类'}}</span>
            </el-menu-item>
            <el-menu-item
                index="/all/"
                :class="{
                    'classical-theme': isClassicalBg(),
                    'lively-theme': isLivelyBg(),
                    'deep-theme': isDeepBg(),
                    'fresh-theme': isFreshBg()
                }"
            >
                <span class="item-split-wrap"></span>
                <i class="iconfont icon-wenzhang"></i>
                <span
                        class="item-title"
                        slot="title"
                >{{$themeConfig.menus.all || '时间归档'}}</span>
            </el-menu-item>
            <el-menu-item
                index="/github/"
                v-if="$themeConfig.github"
                :class="{
                    'classical-theme': isClassicalBg(),
                    'lively-theme': isLivelyBg(),
                    'deep-theme': isDeepBg(),
                    'fresh-theme': isFreshBg()
                }"
            >
                <span class="item-split-wrap"></span>
                <i class="iconfont icon-github"></i>
                <span
                        class="item-title"
                        slot="title"
                >{{$themeConfig.menus.github || 'GitHub'}}</span>
            </el-menu-item>
            <el-menu-item
                index="/about/"
                :class="{
                    'classical-theme': isClassicalBg(),
                    'lively-theme': isLivelyBg(),
                    'deep-theme': isDeepBg(),
                    'fresh-theme': isFreshBg()
                }"
            >
                <span class="item-split-wrap"></span>
                <i class="iconfont icon-aboutme"></i>
                <span
                        class="item-title"
                        slot="title"
                >{{$themeConfig.menus.about || '自我介绍'}}</span>
            </el-menu-item>

        </el-menu>
    </el-aside>
</template>
<script>
    export default {
        name: "Aside",
        props: {
            isHide: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            getThemeStyle() {
                return this.$themeConfig.style || 'classical';
            },
            isClassicalBg() {
                const style = this.getThemeStyle();
                if (style === 'classical') {
                    return true;
                }
                return false;
            },
            isLivelyBg() {
                const style = this.getThemeStyle();
                if (style === 'lively') {
                    return true;
                }
                return false;
            },
            isDeepBg() {
                const style = this.getThemeStyle();
                if (style === 'deep') {
                    return true;
                }
                return false;
            },
            isFreshBg() {
                const style = this.getThemeStyle();
                if (style === 'fresh') {
                    return true;
                }
                return false;
            },
            select(key) {
                if (key === "/github/") {
                    window.open(this.$themeConfig.github);
                } else {
                    this.$router.push(key);
                }
            }
        }
    };
</script>
<style lang="stylus" scoped>
    .el-menu {
        border-right: none;
    }

    .el-menu-item.is-active {
        background-color: #ECEEF8;
    }

    .iconfont {
        color: #909399;
        margin-right: 19px;
        margin-left: 4px;
        width: 24px;
        text-align: center;
        font-size: 28px;
        vertical-align: middle;
        display: inline-block;
    }

    .menuHide .iconfont {
        margin-left: -5px;
        transition: 0.5s ease-in-out;
    }

    .menu {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 66;
        min-height: 100%;
        background: #fff;
        will-change: transform, -webkit-transform;
        transition: 0.2s ease-in-out;
    }

    .menuHide .menu-wrap {
        width: 60px;
    }

    .menu-wrap {
        width: 240px;
        transition: 0.2s ease-in-out;
    }

    .menu .brand-wrap {
        height 240px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    .menu .brand {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 0.2s ease-in-out;
    }

    .menuHide .brand {
        padding: 8px 4px;
        background: #fff;
    }

    .menu .avatar {
        transition: 0.2s ease-in-out;
        width: 78px;
        height: 78px;
        margin-top: 44px;
        border-radius: 50%;
        overflow: hidden;
    }

    .menuHide .avatar {
        width: 48px;
        height: 48px;
    }

    .menu .avatar img {
        width: 100%;
        height: 100%;
    }

    .menu .introduce {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1em 0 0;
        margin-top: 16px;
        color: #1e1e1e;
        font-size: 16px;
        transition: 0.2s ease-in-out;
    }

    .menu .mail {
        display: inline-block;
        padding-top: 4px;
        color: #98989f;
        font-size: 12px;
    }

    .menuHide .introduce, .menuHide .item-title, .menuHide .item-split-wrap {
        display: none;
    }

    .menuHide .iconfont {
        margin-left: 12px !important;
    }

    .el-menu-item {
        padding: 0 !important;
    }

    .el-menu-item.is-active .item-split-wrap {
        visibility: visible;
    }

    .el-menu-item {
        color: #98989F;
    }

    .el-menu-item i {
        margin-left: 20px;
    }

    .item-title {
        font-size: 16px;
    }

    /** classical风格 **/
    .el-menu-item.is-active.classical-theme {
        background-color: #ffffff !important;
        color: #715959 !important;
    }

    .el-menu-item.classical-theme:hover, .el-menu-item.classical-theme:focus {
        color: #715959 !important;
        background-color: #ffffff !important;
    }

    .el-menu-item.classical-theme:hover i {
        color: #715959 !important;
    }

    .classical-theme .item-split-wrap {
        visibility: hidden;
        padding: 8px 2px;
        background-color: #715959;
    }

    /** lively风格 **/
    .el-menu-item.is-active.lively-theme {
        background-color: #ffffff !important;
        color: #6A8075 !important;
    }

    .el-menu-item.lively-theme:hover, .el-menu-item.lively-theme:focus {
        color: #6A8075 !important;
        background-color: #ffffff !important;
    }

    .el-menu-item.lively-theme:hover i {
        color: #6A8075 !important;
    }

    .lively-theme .item-split-wrap {
        visibility: hidden;
        padding: 8px 2px;
        background-color: #6A8075;
    }

    /** deep风格 **/
    .el-menu-item.is-active.deep-theme {
        background-color: #ffffff !important;
        color: #6C6F86 !important;
    }

    .el-menu-item.deep-theme:hover, .el-menu-item.deep-theme:focus {
        color: #6C6F86 !important;
        background-color: #ffffff !important;
    }

    .el-menu-item.deep-theme:hover i {
        color: #6C6F86 !important;
    }

    .deep-theme .item-split-wrap {
        visibility: hidden;
        padding: 8px 2px;
        background-color: #6C6F86;
    }

    /** fresh风格 **/
    .el-menu-item.is-active.fresh-theme {
        background-color: #ffffff !important;
        color: #617B93 !important;
    }

    .el-menu-item.fresh-theme:hover, .el-menu-item.fresh-theme:focus {
        color: #617B93 !important;
        background-color: #ffffff !important;
    }

    .el-menu-item.fresh-theme:hover i {
        color: #617B93 !important;
    }

    .fresh-theme .item-split-wrap {
        visibility: hidden;
        padding: 8px 2px;
        background-color: #617B93;
    }



    @media (max-width: 1190px) {
        .menu {
            transform: translate(-100%, 0px);
        }

        .menuHide.menu {
            transform: translate(0, 0px);
        }

        .menuHide .menu-wrap {
            width: 240px;
        }

        .menuHide .introduce, .menuHide .item-title {
            display: inline-block;
        }

        .menuHide .avatar {
            width: 80px;
            height: 80px;
        }

        .menuHide .brand {
            padding: 41px 24px 24px;
            background-color #ffffff;
        }

        .menuHide .iconfont {
            margin-left: 4px;
        }
    }
</style>