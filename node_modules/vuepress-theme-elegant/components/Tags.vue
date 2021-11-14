<template>
    <el-row class="tag-content">
        <el-row
            type="flex"
            justify="center"
            class="tag-header-container"
        >
            <el-col
                :span="23"
                :xs="{span: 23}"
                :sm="{span: 23}"
                :md="{span: 23}"
                :lg="{span: 23}"
                class="tag-card"
            >
                <el-tag
                    @click="whatTag"
                    v-for="(tag, index) in tagsList"
                    :key="index"
                    size="medium"
                    :hit="true"
                >{{tag[0].name}}
                </el-tag>
            </el-col>
        </el-row>

        <el-row
            v-if="hasTagsList.length"
            type="flex"
            class="tag-list"
        >
            <el-col
                :span="11"
                :xs="{span: 24}"
                :sm="{span: 11}"
                :md="{span: 11}"
                :lg="{span: 11}"
                class="item-list"
                v-for="(post, index) in hasTagsList"
                :key="index"
            >
                <el-card>
                    <div class="post-title-time ellipsis">{{post.lastUpdated}}</div>
                    <router-link :to="post.path" class="post-title-link">{{post.title}}</router-link>
                </el-card>
            </el-col>
        </el-row>
    </el-row>
</template>
<script>
    import tagsList from "imData/tagsList.js";
    import Bus from "imUtils/Bus";

    export default {
        name: "Tags",
        data() {
            return {
                tagName: "",
                tagsList: tagsList
            };
        },
        props: {
            content: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            hasTagsList() {
                if (this.tagName.length === 0) {
                    const paths = this.$route.path.split('/')[2];
                    if (paths.length === 0) {
                        const tags = [];
                        for (const tag in tagsList) {
                            tags.push(tag);
                        }
                        this.tagName = tags[0];
                    } else {
                        this.tagName = paths;
                    }
                }
                if (!this.tagsList[this.tagName]) {
                    return [];
                }
                return this.tagsList[this.tagName].slice(1);
            }
        },
        methods: {
            whatTag(e) {
                this.tagName = e.target.innerText;
                Bus.$emit("changeContentHeader", e.target.innerText);
            }
        },
        watch: {
            $route(to, from) {
                if (to.params.tag) {
                    this.tagName = to.params.tag;
                    Bus.$emit("changeContentHeader", e.target.innerText);
                }
            }
        }
    };
</script>
<style lang="scss" scoped>

    .tag-content {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        padding: 0 18px;
    }

    .tag-list {
        display: flex;
        flex-wrap: wrap;
        padding: 0 30px;
    }

    .item-list {
        margin: 15px 0;
        &:first-child,
        &:nth-child(2) {
            margin-top: 30px;
        }
        &:nth-child(even) {
            margin-left: 8.2222%;
        }
    }

    .post-title-time {
        font-weight: 500;
        font-size: 15px;
        color: #727272;
        padding: 5px 0 5px 10px;
        border-bottom: 1px solid #ebeef5;
    }

    .post-title-link {
        color: #000000;
        opacity: 0.6;
        font-size: 18px;
        display: block;
        padding: 8px 0 8px 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .tag-card {
        padding: 10px 8px;
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        border-radius: 3px;

        .el-tag {
            font-size: 14px !important;
            font-weight: 400 !important;
        }

        .el-tag--medium {
            padding: 0 12px !important;
            height: 30px !important;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px 10px !important;
        }
    }

    @media only screen and (max-width: 767px) {
        .tag-card {
            .el-tag--medium {
                margin: 5px 5px !important;
            }
        }

        .tag-content {
            padding: 0 12px;
        }

        .tag-list {
            padding: 0 15px;
        }

        .item-list {
            &:not(:first-child) {
                margin-top: 10px;
            }
            &:nth-child(even) {
                margin-left: 0 !important;
            }
        }
    }

</style>
