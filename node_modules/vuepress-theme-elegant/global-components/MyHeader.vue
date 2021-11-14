<template>
    <el-row
        id="topHeader"
        :style="{paddingLeft: headerLeft + 'px'}"
        class="top-header"
    >
        <el-row
            type="flex"
            align="middle"
            class="header-search-container"
        >
            <el-col
                :span="3"
                :xs="{span: 3}"
                class="header-icon"
            >
                <el-row
                    type="flex"
                    align="middle"
                >
                    <el-button
                        @click="clickMenu"
                        type="primary"
                        circle
                        key="menusBtn"
                    >
                        <i class="iconfont icon-caidan"></i>
                    </el-button>
                </el-row>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col
                :span="20"
                :xs="{span: 20}"
                class="header-search"
            >
                <el-row
                    type="flex"
                    align="middle"
                >
                    <el-autocomplete
                        v-model="searchVal"
                        @select="handleSelect"
                        class="search-input"
                        popper-class="search-popper"
                        :fetch-suggestions="querySearch"
                        :placeholder="placeholder"
                        size="small"
                        :trigger-on-focus="false"
                        clearable
                        @focus="getSearch"
                    >
                        <i
                            slot="suffix"
                            class="el-input__icon el-icon-search search-ico"
                        ></i>
                        <template slot-scope="{ item }">
                            <div class="name">{{item.title}}</div>
                            <span
                                class="addr addr-active"
                                v-if="hasResults"
                                :style="{backgroundColor: addrActiveColor}"
                            >
                                {{ item.strippedContent.slice(item.searchIndex, item.searchIndex + queryStrlen) }}
                            </span>
                            <span
                                class="addr addr-last"
                                v-if="hasResults"
                            >
                                {{ item.strippedContent.slice(item.searchIndex + queryStrlen) }}
                            </span>
                        </template>
                    </el-autocomplete>
                </el-row>
            </el-col>
        </el-row>
    </el-row>
</template>
<script>

    import themeStyle from '../style/index';

    export default {
        name: 'Header',
        props: {
            showIcon: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                headerLeft: 275,
                searchVal: '',
                queryStrlen: 1,
                hasResults: true,
                restaurants: [],
            };
        },
        computed: {
            addrActiveColor() {
                const style = this.$themeConfig.style || 'classical';
                return themeStyle[style].color;
            },
            placeholder() {
                return this.$themeConfig.placeholder || '';
            },
            searchReply() {
                return this.$themeConfig.searchReply || '什么都没搜到，试一下其它搜索词~';
            }
        },
        methods: {
            getSearch() {
                import(/* webpackChunkName: "search" */ 'imData/search.js').then(
                    search => {
                        this.restaurants = search.default;
                    },
                );
            },
            /**
             * 菜单按钮点击事件
             */
            clickMenu() {
                this.$emit('clickMenu');
                if (typeof window === 'undefined') return;
                if (window.innerWidth <= 1190) {
                    return;
                }

                if (this.headerLeft === 95) {
                    this.headerLeft = 275;
                } else {
                    this.headerLeft = 95;
                }
            },
            querySearch(queryString, cb) {
                this.hasResults = true;
                this.queryStrlen = queryString.length;
                var restaurants = this.restaurants;
                var results = queryString
                    ? restaurants.filter(this.createFilter(queryString))
                    : restaurants;
                if (results.length === 0) {
                    this.hasResults = false;
                    results.push({
                        title: this.searchReply,
                        has: false,
                    });
                }
                cb(results);
            },
            createFilter(queryString) {
                return restaurant => {
                    let searchIndex = restaurant.strippedContent
                        .toLowerCase()
                        .indexOf(queryString.toLowerCase());
                    if (searchIndex > -1) {
                        restaurant.searchIndex = searchIndex;
                        return true;
                    } else {
                        return false;
                    }
                    return searchIndex > -1;
                };
            },
            handleSelect(item) {
                if (item.title === this.searchReply) return;
                this.$router.push(item.path);
            }
        }
    };
</script>
<style>

    @media (max-width: 1190px) {
        #topHeader {
            padding-left: 0 !important;
        }
    }

    .el-autocomplete-suggestion li:hover {
        background-color: #eeeeee;
    }

    .el-autocomplete-suggestion li.highlighted {
        background-color: #d5dfee;
    }
</style>

<style lang="stylus" scoped>

    .top-header {
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;
        width: 50%;
        padding-top: 24px;
        padding-bottom: 4px;
    }

    .iconfont {
        font-size: 16px;
    }

    .top-header .el-button--primary {
        background-color: rgba(0,0,0, .2);
        border: 1px solid transparent;
    }

    .top-header .el-button--primary:hover {
        cursor: pointer;
        background-color: rgba(0,0,0, .3);
    }

    .search-input {
        width: 80%;
    }

    .search-ico {
        font-size: 18px;
        color: #000000;
        opacity: 0.4;
    }

    .search-input >>> input {
        border-radius: 2rem;
        background-color: #ffffff;
        opacity: 0.6;
        color: #000000;
        font-size: 13px;
    }

    .search-popper {

        .el-autocomplete-suggestion__wrap {
            margin-bottom: 0 !important;
            li:not(lastChild) {
                border-bottom: 1px solid;
                margin-bottom: 5px;
            }
        }

        .name {
            border-radius: 5px;
            padding: 0;
            white-space: nowrap;
            overflow: hidden;
            color: #000000;
            opacity: 0.6;
            text-overflow: ellipsis;
        }

        .addr {
            border-radius: 5px;
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            color: #000000;
            opacity: 0.6;
            text-overflow: ellipsis;
        }

        .addr-active {
            /*background-color: #6e7f76;*/
            border-radius: 3px;
            color: #fff;
            padding: 0 3px 0 2px;
            margin-left: 8px;
            opacity: 0.6;
        }

        .addr-last {
            padding-left: 0;
        }
    }

    @media only screen and (max-width: 767px) {
        .top-header {
            width: 100%;
            margin-left: 15px;
        }
    }

</style>