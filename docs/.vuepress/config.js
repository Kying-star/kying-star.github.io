/*
 * @Author: your name
 * @Date: 2020-09-30 21:06:08
 * @LastEditTime: 2021-03-24 16:15:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/config.js
 */
module.exports = {
    title: "kying-star的博客",
    description: "记录学习",
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico` }]
    ],
    Article : 11,
    theme: 'vuepress-theme-reco',
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
    },
};