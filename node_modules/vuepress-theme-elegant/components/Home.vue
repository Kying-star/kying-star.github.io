<template>
    <el-row
        type="flex"
        justify="center"
        class="home-container"
    >
        <el-row
            type="flex"
            justify="center"
            v-for="item in posts"
            :key="item.id"
        >
            <el-col
                :span="23"
                :xs="{span: 23}"
                :sm="{span: 23}"
                :md="{span: 23}"
                :lg="{span: 23}"
            >
                <el-card class="box-card">
                    <div slot="header">
                        <div class="post-title-time">
                            {{item.lastUpdated}}
                        </div>
                        <router-link
                            :to="item.path"
                            class="post-title-link"
                        >{{item.title}}
                        </router-link>
                    </div>
                    <div v-if="(item.excerpt)">
                        <div v-if="item.excerpt">
                            <div class="post-excerpt" v-html="item.excerpt"></div>
                        </div>
                        <div
                            class="post-footer"
                            v-if="item.tags.length"
                        >
                            <el-tag
                                @click="toTaglist"
                                v-for="(tag, index) in item.tags"
                                :key="index"
                                size="medium"
                                :hit="true"
                                class="tag-items-wrap"
                            >{{tag}}
                            </el-tag>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row
            class="pagination-wrap"
            type="flex"
            justify="center"
            align="middle"
            v-show="content.length"
        >
            <el-col
                :span="16"
                :xs="{span: 24}"
                :sm="{span: 20}"
                :md="{span: 18}"
                :lg="{span: 16}"
            >
                <el-pagination
                        :current-page="currentPage"
                        class="pagination"
                        background
                        @current-change="changePage"
                        layout="prev, pager, next"
                        :page-size="pagination"
                        :total="content.length"
                        key="fenyei"
                ></el-pagination>
            </el-col>
        </el-row>
    </el-row>
</template>
<script>
    export default {
        name: "Home",
        data() {
            return {
                currentPage: 1
            };
        },
        props: {
            content: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            pagination() {
                return +this.$themeConfig.pagination || 5;
            },
            posts() {
                return this.content.slice(
                    this.pagination * this.currentPage - this.pagination,
                    this.pagination * this.currentPage
                );
            }
        },
        methods: {
            changePage(index) {
                this.currentPage = index;
                window.scrollTo({top: 0});
            },
            toTaglist(e) {
                this.$router.push("/tags/" + e.target.innerText);
            }
        }
    };
</script>

<style lang="stylus" scoped>

    .home-container {
        flex-direction: column;
        margin-top: 40px;
        padding: 0 17px;
    }

    .box-card {
        height: auto;
        &:first-child {
            margin-top: 25px;
        }
        &:last-child {
            margin-bottom: 10px;
        }
    }

    .post-title-time {
        font-size: 14px;
        color: #727272;
        font-weight: 500;
        margin-bottom: 5px;
    }

    .post-title-link {
        font-size: 18px;
        color: #222222;
        opacity: 0.7;
        padding: 2px 0;
    }

    .post-excerpt {
        color: #888888;
        font-size: 14px;
    }

    .post-footer {
        font-size: 14px;
        color: #FFFFFF;
        .tag-items-wrap {
            border-radius: 3px;
            font-weight: bold;
            border: 1px solid transparent;
        }
    }

    .pagination >>> .el-pager li {
        width: 34px;
        height: 34px;
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        background: #fff;
        border-radius: 4px;
        font-weight: 500;
        color: #000;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
    }

    .pagination >>> .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #3f51b5;
        color: #fff;
    }

    .pagination >>> .el-pagination.is-background .btn-prev, .el-pagination.is-background .btn-next {
        padding: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        height: 30px;
        border-radius: 4px;
        width: 30px;
        margin: 0.3rem 10px;
        background: #fff;
    }

    .pagination-wrap {
        margin-top: 25px;
        >>> .el-pager {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            li {
                margin: 5px;
                height: 30px;
                width: 30px;
            }
            li:not(.disabled).active {
                background-color: #ffffff !important;
                opacity: 0.6;
                color: #000000;
            }
        }
    }

    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 767px) {
        .home-container {
            margin-top: 20px;
            padding: 0 10px;
        }

        .box-card {
            &:first-child {
                margin-top: 20px;
            }
        }

        .post-excerpt {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        .pagination-wrap {
            margin-bottom: 30px;
        }

    }

</style>