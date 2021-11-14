<template>
    <div :key="$page.title">
        <el-row
                type="flex"
                class="post-content"
        >
            <el-col
                    :span="17"
                    :xs="{ span: 24 }"
                    :sm="{ span: 23 }"
                    :md="{ span: 23 }"
                    :lg="{ span: 17 }"
                    class="post-card post-sign"
                    id="post-card"
            >
                <Content></Content>
            </el-col>
            <el-col
                    :span="6"
                    class="post-toc"
                    id="post-toc"
                    :class="{ 'open-toc': hasToc }"
            >
                <div class="catalog-title">目录</div>
                <div class="catalog-body">
                    <ul
                            id="catalog-list"
                            class="catalog-list"
                    >
                        <li
                                v-for="(item, index) in catalogList"
                                :key="index"
                                class="toc-li"
                                :class="{
                                    active: tocExtClass(index),
                                    'classical-theme': isClassicalBg(index),
                                    'lively-theme': isLivelyBg(index),
                                    'deep-theme': isDeepBg(index),
                                    'fresh-theme': isFreshBg(index)
                                }"
                        >
                            <a
                                    class="toc-link ellipsis"
                                    :href="'#' + item.id"
                                    :style="{ marginLeft: offsetList[index] * 14 + 'px' }"
                            >
                                {{ item.textContent.substring(2) }}
                            </a>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>

        <el-row
                type="flex"
                class="post-nav"
        >
            <el-col
                    :span="8"
                    class="post-prev"
            >
                <div v-if="!isNaN(prevPost)">
                    <router-link :to="content[prevPost].path || '/'">
                        <i class="el-icon-arrow-left"></i> Prev
                    </router-link>
                    <router-link
                            tag="p"
                            :to="content[prevPost].path || '/'"
                            class="nav-title"
                    >{{ content[prevPost].title }}
                    </router-link>
                </div>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col
                    :span="8"
                    class="post-next"
            >
                <div v-if="!isNaN(nextPost)">
                    <router-link
                            tag="p"
                            :to="content[nextPost].path || '/'"
                            class="nav-title"
                    >{{ content[nextPost].title }}
                    </router-link>
                    <router-link :to="content[nextPost].path || '/'">
                        Next
                        <i class="el-icon-arrow-right"></i>
                    </router-link>
                </div>
            </el-col>
        </el-row>
        <!-- 底部按钮 -->
        <toc-btn @toc="changeToc"></toc-btn>
    </div>
</template>
<script>

    import TocBtn from "imComponents/TocBtn";

    export default {
        name: "Posts",
        components: {
            TocBtn
        },
        data() {
            return {
                nextPost: 0,
                prevPost: 3,
                allH: [],
                catalogList: [],
                currentIndex: 0,
                offsetList: [],
                hasToc: false
            };
        },
        props: {
            content: {
                type: Array,
                default: () => []
            }
        },
        created() {
            this.getPageIndex();
            setTimeout(() => {
                this.getPageIndex();
            }, 100);
        },
        mounted() {
            setTimeout(() => {
                this.getH();
                this.changeIndex();
            }, 20);
        },

        methods: {

            getThemeStyle() {
                return this.$themeConfig.style || 'classical';
            },

            tocExtClass(index) {
                return this.currentIndex === index;
            },

            isClassicalBg(index) {
                const actIndex = this.currentIndex === index;
                const style = this.getThemeStyle();
                if (actIndex && style === 'classical') {
                    return true;
                }
                return false;
            },

            isLivelyBg(index) {
                const actIndex = this.currentIndex === index;
                const style = this.getThemeStyle();
                if (actIndex && style === 'lively') {
                    return true;
                }
                return false;
            },

            isDeepBg(index) {
                const actIndex = this.currentIndex === index;
                const style = this.getThemeStyle();
                if (actIndex && style === 'deep') {
                    return true;
                }
                return false;
            },

            isFreshBg(index) {
                const actIndex = this.currentIndex === index;
                const style = this.getThemeStyle();
                if (actIndex && style === 'fresh') {
                    return true;
                }
                return false;
            },

            throttle(fn, wait, maxTimelong) {
                var timeout = null,
                    startTime = Date.parse(new Date());

                return function () {
                    if (timeout !== null) clearTimeout(timeout);
                    var curTime = Date.parse(new Date());
                    if (curTime - startTime >= maxTimelong) {
                        fn();
                        startTime = curTime;
                    } else {
                        timeout = setTimeout(fn, wait);
                    }
                };
            },

            changeToc() {
                this.hasToc = !this.hasToc;
            },

            getH() {
                this.catalogList.splice(0, this.catalogList.length);
                this.offsetList.splice(0, this.offsetList.length);
                this.allH.splice(0, this.allH.length);
                if (typeof window === "undefined") return;
                if (!document.querySelector(".post-sign")) {
                    return;
                }
                let a = [];
                let allH = document
                    .querySelector(".post-sign")
                    .querySelectorAll("h1,h2,h3,h4,h5,h6");
                if (allH.length === 0) {
                    return;
                }
                let nodeArr = [].slice.call(allH);
                nodeArr.forEach((val, i) => {
                    this.allH.push(val.offsetTop);
                    this.catalogList.push(val);
                    if (i === 0) {
                        a.push(0);
                    } else {
                        let hNow = Number(val.tagName.slice(1));
                        let hPrev = Number(nodeArr[i - 1].tagName.slice(1));
                        if (hNow > hPrev) {
                            a.push(a[i - 1] + (hNow - hPrev));
                        } else if (hNow < hPrev) {
                            a.push(a[i - 1] - (hPrev - hNow));
                        } else {
                            a.push(a[i - 1]);
                        }
                    }
                });
                let min = a.reduce((x, y) => {
                    return x > y ? y : x;
                });
                let offset = Math.abs(min);
                a.forEach(val => {
                    if (min < 0) {
                        val += offset;
                    }
                    if (min > 0) {
                        val -= offset;
                    }
                    this.offsetList.push(val);
                });
            },
            getPageIndex() {
                if (this.content.length === 0 || this.content.length === 1) {
                    this.nextPost = NaN;
                    this.prevPost = NaN;
                    return;
                }
                for (var i = 0, len = this.content.length; i < len; i++) {
                    if (this.content[i].path === this.$page.path) {
                        if (i + 1 === this.content.length) {
                            this.nextPost = NaN;
                            this.prevPost = i - 1;
                        } else if (i - 1 < 0) {
                            this.nextPost = i + 1;
                            this.prevPost = NaN;
                        } else {
                            this.nextPost = i + 1;
                            this.prevPost = i - 1;
                        }
                    }
                }
            },
            getScrollTop() {
                if (typeof window === "undefined") return;
                var scrollPos;
                if (window.pageYOffset) {
                    scrollPos = window.pageYOffset;
                } else if (document.compatMode && document.compatMode != "BackCompat") {
                    scrollPos = document.documentElement.scrollTop;
                } else if (document.body) {
                    scrollPos = document.body.scrollTop;
                }
                return scrollPos;
            },
            changeIndex() {
                if (typeof window === "undefined") return;
                const _this = this;
                // 目录滚动旋中的样式
                window.addEventListener(
                    "scroll",
                    _this.throttle(
                        function (e) {
                            if (_this.$route.path.slice(0, 7) !== "/posts/") {
                                return
                            }
                            let h = _this.getScrollTop();
                            for (let i = 0, len = _this.allH.length; i < len; i++) {
                                if (i + 1 === _this.allH.length || h < _this.allH[i]) {
                                    return (_this.currentIndex = i);
                                }
                                if (h >= _this.allH[i] && h < _this.allH[i + 1]) {
                                    return (_this.currentIndex = i);
                                }
                            }
                        },
                        60,
                        110
                    )
                );
                // 目录吸顶固定
                window.addEventListener("scroll", function () {
                    if (_this.$route.path.slice(0, 7) !== "/posts/") {
                        return
                    }
                    const toc = document.getElementById("post-toc");
                    let h = _this.getScrollTop();
                    if (h >= 240) {
                        toc.classList.add("fixed");
                    } else {
                        toc.classList.remove("fixed");
                    }
                });
            }
        },
        watch: {
            $route(to, from) {
                if (to.path.slice(0, 7) === "/posts/") {
                    this.getPageIndex();
                    setTimeout(() => {
                        this.getH();
                        this.changeIndex();
                    }, 20);
                }
            },
            deep: true
        }
    };
</script>
<style lang="scss">

    .post-content {
        margin-top: 40px;
        padding-left: 40px;
    }

    .post-card {
        padding: 20px 30px;
        background: #fff;
        transition: 0.2s all ease-in-out;
        border-radius: 3px;
    }

    .post-toc {
        position: absolute;
        height: auto;
        width: 19vw !important;
        top: 0px;
        right: 26px;
        border-radius: 3px;
        background: #f6f6f6;
    }

    .fixed {
        position: fixed;
        top: 70px;
        width: 19vw !important;
        right: 26px;
    }


    .post-nav {
        margin-top: 30px;
        padding-left: 40px;
    }

    .post-prev,
    .post-next {
        font-size: 18px;
        display: flex;

        i {
            position: relative;
            top: 1px;
        }

        a {
            color: #ffffff;
            opacity: 0.8;
        }

        p {
            margin: 0;
            width: 150px;
            height: 20px;
            font-size: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            position: relative;
            top: 3px;
        }

        a:hover,
        p:hover {
            color: #ffffff;
            opacity: 1;
            cursor: pointer;
        }
    }

    .post-next {
        justify-content: flex-end;

        p {
            text-align: right;
        }
    }

    .nav-title {
        color: #ffffff;
        opacity: 0.8;
        display: inline-block;
    }

    .catalog-title {
        text-align: center;
        height: 30px;
        display: flex;
        align-items: center;
        font-size: 15px;
        padding-left: 10px;
        transition: all 0.2s ease-in-out;
    }

    .toc-link:before,
    .toc-link:after {
        content: "";
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        left: 3px;
        height: 100%;
    }

    /** classical风格 **/
    .toc-li.active.classical-theme > .toc-link:after {
        border-left: 3px solid #705959;
        left: 2px;
    }

    .toc-li.active.classical-theme > .toc-link:before {
         background: rgba(0, 0, 0, 0.06);
     }

    /** lively风格 **/
    .toc-li.active.lively-theme > .toc-link:after {
        border-left: 3px solid #6A8075;
        left: 2px;
    }

    .toc-li.active.lively-theme > .toc-link:before {
        background: rgba(0, 0, 0, 0.06);
    }

    /** deep风格 **/
    .toc-li.active.deep-theme > .toc-link:after {
        border-left: 3px solid #6C6F86;
        left: 2px;
    }

    .toc-li.active.deep-theme > .toc-link:before {
        background: rgba(0, 0, 0, 0.06);
    }

    /** fresh风格 **/
    .toc-li.active.fresh-theme > .toc-link:after {
        border-left: 3px solid #617B93;
        left: 2px;
    }

    .toc-li.active.fresh-theme > .toc-link:before {
        background: rgba(0, 0, 0, 0.06);
    }

    .catalog-body {
        .catalog-list {
            font-size: 13px;
            list-style: none;
            cursor: pointer;
            padding-left: 10px !important;

            a {
                display: block;
                padding: 3px 5px 3px 9px;
                margin: 4px 0;
                position: relative;
                font-weight: 600;
                font-size: 14px;
                color: inherit;
            }

            .active.classical-theme a {
                color: #705959;
            }

            .active.lively-theme a {
                color: #6A8075;
            }

            .active.deep-theme a {
                color: #6C6F86;
            }

            .active.fresh-theme a {
                color: #617B93;
            }
        }
    }

    @media only screen and (max-width: 767px) {

        .post-content {
            margin-top: 40px;
            padding: 0 22px;
        }

        .post-card {
            padding-left: 15px;
            padding-right: 14px;
            margin-bottom: 30px;
        }

        .post-toc {
            position: fixed;
            top: auto;
            bottom: 70px;
            right: 20px;
            transform: translateX(125%);
            z-index: 77;
            width: 90vw !important;
            max-height: 400px;
            overflow: auto;
        }

        .open-toc {
            transform: translateX(0);
        }

        .post-nav {
            display: none;
        }

    }
</style>