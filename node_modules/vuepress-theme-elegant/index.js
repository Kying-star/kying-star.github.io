const path = require('path');
const moment = require('moment');
const fs = require('fs');

// 默认标签背景色
const tagBgColors = [
    '#DFCCB8',
    '#A98895',
    '#6E7F76',
    '#6C6F84',
    '#667B91',
    '#66C67F',
    "#6C6F84",
    '#6DD7D3'
];

module.exports = (options, ctx) => ({
    // 插件
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: timestamp => {
                    const moment = require('moment');
                    moment.locale('zh-CN');
                    return moment(timestamp).format(
                        'YYYY-MM-DD HH:mm:ss'
                    );
                }
            }
        ]
    ],
    // 增强文件
    enhanceAppFiles: path.resolve(__dirname, 'enhanceApp.js'),
    // md文件的配置
    chainMarkdown(config) {
        config
            .plugin('anchor')
            .tap(([options]) => [
                Object.assign(options, {
                    level: [1, 2, 3, 4, 5, 6]
                })
            ]);
    },
    // 别名
    alias: {
        imStyles: path.resolve(__dirname, 'styles'),
        imRouter: path.resolve(__dirname, 'router'),
        imComponents: path.resolve(__dirname, 'components'),
        imData: path.resolve(__dirname, 'data'),
        imUtils: path.resolve(__dirname, 'utils')
    },
    // 生命周期函数入口
    async ready() {

        // 生成客户端所需的数据 -> 只处理posts文件夹下的文件
        const postsFilter = val => val.path.slice(1, 6) === 'posts';

        // 排序函数
        // prev.frontmatter.date：文章的创建时间
        // prev.lastUpdated：文章的最后更新时间，即git的提交时间
        const postsSorter = (prev, next) => {
            // 当前的时间
            const prevTime =
                new Date(prev.frontmatter.date).getTime() ||
                new Date(prev.lastUpdated).getTime() ||
                new Date().getTime();
            // 更新时间
            const nextTime =
                new Date(next.frontmatter.date).getTime() ||
                new Date(next.lastUpdated).getTime() ||
                new Date().getTime();
            // 对比函数
            return prevTime - nextTime > 0 ? -1 : 1;
        };

        const {pages} = ctx;

        // 格式化 lastUpdated
        function changeDate(dateStr) {
            if (dateStr.length === undefined) {
                let str = JSON.stringify(dateStr, null, 2);
                return str.slice(1, 11) + ' ' + str.slice(12, -6);
            } else {
                return dateStr;
            }
        }

        // 进一步个性化 lastUpdated,全部文章页中使用
        function changeTime(dateStr) {
            let str = dateStr.slice(0, 7);
            const arr = str.split('-');
            let result = [
                arr[0] + '-' + arr[1],
                Number(arr[0]) + Number(arr[1])
            ];
            return result;
        }

        // 解析post目录下的文件
        const posts = pages.filter(postsFilter);
        // 按创建时间进行排序
        posts.sort(postsSorter);

        // 存放最终数据的变量
        let archived = []; // 归档
        let tagsList = {}; // 标签
        let poList = []; // 文章列表
        let search = []; // 搜索

        // 用于存储标签颜色
        const tagsMap = {};

        // 对文章进行遍历
        posts.forEach((val, index) => {

            // 页面对象
            let page = {};

            // 搜索对象
            let sear = {};

            let {
                excerpt, // 摘录
                lastUpdated, // 最后更新时间，git提交的最新时间
                path, // 文章的路径，如/posts/ppos1.html
                _strippedContent // md原生文档内容
            } = val;

            // 获取文章标题和标签属性
            let {title, tags} = val.frontmatter;

            // 去除md文档换行符
            if (_strippedContent) {
                _strippedContent = _strippedContent
                    .replace(/[\n\r]/g, ' ')
                    .replace(/\s+/, ' ');
            }

            // 对文章摘要进行格式化，超过350个字符出现省略号
            if (_strippedContent) {
                excerpt =
                    excerpt ||
                    (_strippedContent.slice(0, 270)
                        ? _strippedContent.slice(0, 270) + '...'
                        : false) ||
                    '';
                excerpt = excerpt.replace(/#/g, '');
            } else {
                excerpt = '';
            }

            // 最后更新时间
            lastUpdated =
                val.frontmatter.date ||
                lastUpdated ||
                moment().format('YYYY-MM-DD HH:mm:ss');
            lastUpdated = changeDate(lastUpdated);

            // 标签定义，同时给标签定义背景颜色
            tags = tags || ['未分类'];

            // 文章标题
            title = title || '你忘记写title字段了';

            // 页面对象
            page.excerpt = excerpt;
            page.tags = tags;
            page.id = index;
            page.title = title;
            page.lastUpdated = lastUpdated;
            page.path = path;

            // 搜索对象
            sear.title = title;
            sear.path = path;
            sear.strippedContent = _strippedContent;

            // 归档
            archived.push(page);

            // 搜索
            search.push(sear);

            // 生成标签页的数据，同时剔除不需要的数据
            const t = {};
            t.lastUpdated = lastUpdated;
            t.tags = tags;
            t.id = index;
            t.title = title;
            t.path = path;
            if (tags.length === 0) {
                if (!tagsList['未分类']) {
                    tagsList['未分类'] = [{
                        name: '未分类',
                    }];
                }
                tagsList['未分类'].push(t);
            } else {
                tags.forEach(tag => {
                    if (tag === undefined) {
                        if (!tagsList['未分类']) {
                            tagsList['未分类'] = [{
                                name: '未分类',
                            }];
                        }
                        tagsList['未分类'].push(t);
                    }
                    if (!tagsList[tag]) {
                        tagsList[tag] = [{
                            name: tag
                        }];
                    }
                    tagsList[tag].push(t);
                });
            }
        });

        // 生成全部文章页所需要的数据，即poList
        let index = 0;
        archived.forEach((val, i) => {
            let result1 = changeTime(val.lastUpdated);
            if (archived.length === 1) {
                poList[0] = [result1[0]];
                return poList[0].push(val);
            }
            if (i + 1 !== archived.length) {
                var result2 = changeTime(
                    archived[i + 1].lastUpdated
                );
            } else {
                var result2 = changeTime(
                    archived[i - 1].lastUpdated
                );
            }
            if (!poList[index]) {
                poList[index] = [result1[0]];
            }
            if (!poList[index]) {
                poList[index] = [result2[0]];
            }
            poList[index].push(val);
            if (result1[1] !== result2[1]) {
                index++;
            }
        });

        const dataPath = path.resolve(__dirname, 'data');
        console.log('********* 正在写入本地数据，加快在客户端的加载速度 *********');

        // 写入文章数据
        fs.writeFile(
            `${dataPath}/content.js`,
            `export default ${JSON.stringify(archived, null, 2)};`,
            error => {
                if (error) {
                    return console.log(
                        '写入首页content文件失败,原因是' + error.message
                    );
                }
                console.log('写入首页content文件成功');
            }
        );
        // 写入标签页数据
        fs.writeFile(
            `${dataPath}/tagsList.js`,
            `export default ${JSON.stringify(tagsList,null,2)};`,
            error => {
                if (error) {
                    return console.log(
                        '写入标签页tagsList文件失败,原因是' +
                        error.message
                    );
                }
                console.log('写入标签页tagsList文件成功');
            }
        );
        // 写入搜索数据
        fs.writeFile(
            `${dataPath}/search.js`,
            `export default ${JSON.stringify(search, null, 2)};`,
            error => {
                if (error) {
                    return console.log(
                        '写入搜索search文件失败,原因是' + error.message
                    );
                }
                console.log('写入搜索search文件成功');
            }
        );
        // 写入归档页数据
        fs.writeFile(
            `${dataPath}/poList.js`,
            `export default ${JSON.stringify(poList, null, 2)};`,
            error => {
                if (error) {
                    return console.log(
                        '写入归档页poList文件失败,原因是' +
                        error.message
                    );
                }
                console.log('写入归档页poList文件成功');
            }
        );
    }
});
