const classicalImg = require('../public/classical.png');
const livelyImg = require('../public/lively.png');
const deepImg = require('../public/deep.png');
const freshImg = require('../public/fresh.png');

export default {
    // 古典
    classical : {
        color: '#715959',
        headerImg: classicalImg,
        goTopBgColor: '#A98895'
    },
    // 活泼
    lively: {
        color: '#6A8075',
        headerImg: livelyImg,
        goTopBgColor: '#6F997A'
    },
    // 深沉
    deep: {
        color: '#6C6F86',
        headerImg: deepImg,
        goTopBgColor: '#6F7886'
    },
    // 清新
    fresh: {
        color: '#617B93',
        headerImg: freshImg,
        goTopBgColor: '#618B93'
    }
};
