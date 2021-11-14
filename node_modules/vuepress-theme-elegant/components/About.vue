<template>
    <el-row
        type="flex"
        justify="center"
        class="post-content"
    >
        <el-col
            :xs="{span: 24}"
            :sm="{span: 24}"
            :md="{span: 24}"
            :lg="{span: 24}"
            class="post-card"
            id="post-card"
        >
            <Content></Content>
            <span id="footerPost"></span>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        name: "About",
        props: {
            content: {
                type: Array,
                default: () => []
            }
        }
    };
</script>
<style lang="stylus" scoped>
    .post-content {
        margin-top: 60px;
        padding: 0 20px;
    }

    .post-card {
        padding: 15px 10px;
        transition: 0.2s all ease-in-out;
        border-radius: 3px;
        background-color: #ffffff;
    }

    @media (max-width: 1190px) {
        .post-card {
            margin-right: 0;
            padding: 13px;
        }
    }

    @media only screen and (max-width: 767px) {
        .post-content {
            margin-top: 30px;
            margin-bottom: 30px;
        }

        .post-card {
            border-radius: 0;
            box-shadow: none;
        }
    }
</style>