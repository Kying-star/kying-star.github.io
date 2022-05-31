const fs = require('fs');

// 同步读取上级目录下的所有文件到files中 bate
// const getEssayList = (src) => {
//     const files = [
//         '/algorithm/岛屿问题/200.岛屿数量(中等)/',
//         '/algorithm/岛屿问题/1254.统计封闭岛屿的数目(中等)/',
//         '/algorithm/岛屿问题/695.岛屿的最大面积/',
//         '/algorithm/岛屿问题/1905.统计子岛屿/',
//         '/algorithm/岛屿问题/1020飞地的数量(中等)/',
//     ]
//     return fi
// } 
// console.log(getEssayList('algorithm/岛屿问题'));
module.exports = {
    '/webfont/': [
        {
            title: "js",
            path: "/webfont/js/",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "/webfont/js/彻底了解This.md",
                "/webfont/js/原型与原型链.md",
                "/webfont/js/AJAX.md",
                "/webfont/js/防抖与节流.md",
                "/webfont/js/高阶函数",
                "/webfont/js/懒加载.md",
                "/webfont/js/轮播图.md",
                "/webfont/js/js作用域.md",
            ],
        },
        {
            title: "css",
            path: "/webfont/css/",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "/webfont/css/几种好看的颜色.md",
                "/webfont/css/帅到离谱的滚动视差",
                "/webfont/css/CSS拟态风.md",
                "/webfont/css/Houdini：CSS 领域最令人振奋的革新",
            ],
        },
        {
            title: "vue",
            path: "/webfont/vue/",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "/webfont/vue/Vue底层原理.md",
                "/webfont/vue/Vite.md",
                "/webfont/vue/vue-awesome-swiper使用.md",
                "/webfont/vue/vue-router的使用.md",
                "/webfont/vue/vue_scss.md",
                "/webfont/vue/vue使用postcss.md",
                "/webfont/vue/Vue自定义组件.md",
                "/webfont/vue/vuex的使用.md",
            ],
        },
        {
            title: "typescript",
            path: "/webfont/ts/",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "/webfont/ts/Typescript入门.md",
                "/webfont/ts/TypeScript联合类型.md",
                "/webfont/ts/函数.md",
                "/webfont/ts/typescript泛型.md",
                "/webfont/ts/typescript接口.md",
                "/webfont/ts/Typescript类.md",
            ],
        },
        {
            title: "React",
            path: "/webfont/react/",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "/webfont/react/React底层原理.md",
                "/webfont/react/React的起步.md",
                "/webfont/react/ReactCSS.md",
                "/webfont/react/recoil入门.md"
            ],
        },
        {
            title: "前端新技术",
            path: "/webfont/Frontier/",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "/webfont/Frontier/monorepo.md",
            ],
        },
        {
            title: "正则表达式",
            path: "/webfont/regex/",
            collapsable: true,
            sidebarDepth: 1,
            children: ["/webfont/regex/正则表达式.md"],
        },
        {
            title: "浏览器",
            path: "/webfont/Browser/",
            collapsable: true,
            sidebarDepth: 1,
            children: ["/webfont/Browser/http资源缓存机制/"],
        },
    ],
    '/other/': [
        {
            title: "单片机",
            path: "/other/mpu/",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "/other/mpu/first-mpu.md",
                "/other/mpu/C51实现流水灯.md",
                "/other/mpu/C51实现数码管.md"
            ],
        },
        {
            title: "Python",
            path: "/other/Python/",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "/other/Python/Python入门.md",
                "/other/Python/Python图像处理.md"
            ],
        },
    {
        title: "Git",
        path: "/other/git/",
        collapsable: true,
        sidebarDepth: 1,
        children: [
            "/other/git/Git.md",
        ],
        },
        {
            title: "Docker",
            path: "/other/docker/",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "/other/docker/Docker基本知识.md",
            ],
        },
        {
            title: "Vuepress",
            path: "/other/vuepress/",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "/other/vuepress/vuepress常用语法.md",
            ],
        },
        {
            title: "miscellanea",
            path: "/other/miscellanea/",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "/other/miscellanea/2021年11月13日杂记.md",
                "/other/miscellanea/2022年1月28日杂记.md",
            ],
        },
        {
            title: "操作系统",
            path: "/other/OS/",
            collapsable: true,
            sidebarDepth: 1,
            children: [
                "/other/OS/操作系统简述.md",
            ],
        },
    ],
    '/algorithm/': [
        {
            title: '岛屿问题',
            path: '/algorithm/岛屿问题/',
            sidebarDepth: 1,
            children: [
                '/algorithm/岛屿问题/200.岛屿数量(中等)/',
                '/algorithm/岛屿问题/1254.统计封闭岛屿的数目(中等)/',
                '/algorithm/岛屿问题/695.岛屿的最大面积/',
                '/algorithm/岛屿问题/1905.统计子岛屿/',
                '/algorithm/岛屿问题/1020飞地的数量(中等)/',
            ]
        },
        {
            title: '链表',
            path: '/algorithm/链表/',
            sidebarDepth: 1,
            children: [
                '/algorithm/链表/21. 合并两个有序链表(简单)/',
                '/algorithm/链表/23. 合并K个升序链表(困难)/',
                '/algorithm/链表/141. 环形链表(简单)/',
                '/algorithm/链表/142. 环形链表 II(中等)/',
                '/algorithm/链表/876. 链表的中间结点(简单)/',
                '/algorithm/链表/19. 删除链表的倒数第 N 个结点(困难)/',
                '/algorithm/链表/160. 相交链表/',
            ]
        },
        {
            title: '二叉树',
            path: '/algorithm/二叉树/',
            sidebarDepth: 1,
            children: [
                '/algorithm/二叉树/654. 最大二叉树(中等)/',
                '/algorithm/二叉树/105. 从前序与中序遍历序列构造二叉树(中等)/',
                '/algorithm/二叉树/106. 从中序与后序遍历序列构造二叉树(中等)/',
                '/algorithm/二叉树/114. 二叉树展开为链表(中等)/',
                '/algorithm/二叉树/230. 二叉搜索树中第K小的元素/',
                '/algorithm/二叉树/226. 翻转二叉树(简单)/',
                '/algorithm/二叉树/538. 把二叉搜索树转换为累加树(中等)/',
                '/algorithm/二叉树/450. 删除二叉搜索树中的节点(中等)/',
                '/algorithm/二叉树/98. 验证二叉搜索树(中等)/',
                '/algorithm/二叉树/701. 二叉搜索树中的插入操作(中等)/',
            ]
        },
        {
            title: '图',
            path: '/algorithm/图',
            sidebarDepth: 1,
            children: [
                '/algorithm/图/797. 所有可能的路径(中等)/'
            ]
        },
        {
            title: '前端常见算法',
            path: '/algorithm/前端常见算法',
            sidebarDepth: 1,
            children: [
                '/algorithm/前端常见算法/new/',
                '/algorithm/前端常见算法/promise/'
            ]
        },
        {
            title: '活用数据结构问题',
            path: '/algorithm/活用数据结构问题',
            sidebarDepth: 1,
            children: [
                '/algorithm/活用数据结构问题/146. LRU 缓存机制(中等)/'
            ]
        }
    ]
};
