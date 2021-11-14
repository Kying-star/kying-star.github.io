<template>
    <el-row
        type="flex"
        justify="center"
        class="all-warp"
    >
        <el-col
            :xs="{span: 24}"
            :sm="{span: 23}"
            :md="{span: 23}"
            :lg="{span: 23}"
            class="post-card"
        >
            <el-timeline class="content-wrap">
                <el-timeline-item
                    v-for="(item, index) in poList"
                    :key="index"
                    :timestamp="item[0]"
                    placement="top"
                >
                    <template v-for="(post, i) in item">
                        <el-card v-if="i > 0" class="item-wrap">
                            <div class="item-header">
                                <router-link
                                    :to="post.path"
                                    class="header-text"
                                >{{post.title}}
                                </router-link>
                            </div>
                            <div class="item-content">
                                <span>{{post.excerpt}}</span>
                            </div>
                        </el-card>
                    </template>
                </el-timeline-item>
            </el-timeline>
        </el-col>
    </el-row>
</template>
<script>
    import poList from "imData/poList.js";

    export default {
        name: "All",
        data() {
            return {
                poList: poList
            };
        },
        props: {
            content: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            toTaglist(e) {
                this.$router.push("/tags/" + e.target.innerText);
            }
        }
    };
</script>
<style lang="scss" scoped>
    .all-warp {
        margin-top: 40px;
        padding: 0 15px;
    }

    .post-card {
        height: auto;
    }

    .content-wrap {
        padding: 20px 15px;
        background-color: #ffffff;
        border-radius: 3px;
    }

    .item-wrap {
        display: flex;
        flex-direction: column;
        margin: 20px 0;
        .item-header {
            display: flex;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #ebeef5;
            .header-text {
                color: #000000;
                opacity: 0.6;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .item-content {
            color: #888;
            font-size: 14px;
            padding: 20px 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    @media only screen and (max-width: 767px) {
        .all-warp {
            margin-top: 40px;
            padding: 0 20px;
        }

        .content-wrap{
            padding-bottom: 0;
            margin-bottom: 35px;
        }
    }

</style>