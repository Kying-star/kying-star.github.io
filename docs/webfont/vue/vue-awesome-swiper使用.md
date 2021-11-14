## vue-awesome-swiper使用

------

### 下载

```javascript
npm install swiper vue-awesome-swiper --save
# or
yarn add swiper vue-awesome-swiper
```

### 引入

1、全局引入

```javascript
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
//import 'swiper/css/swiper.css'版本问题
 import "swiper/swiper-bundle.min.css";//6X版本
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
```

2、局部引入

```javascript
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
//import 'swiper/css/swiper.css'//低版本
  import "swiper/swiper-bundle.min.css";//6X版本--至2020/7/29
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
```

### 基本使用

简单轮播图 （6x版本）

```vue
<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 林其星
 * @Date: 2020-07-29 14:58:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-29 15:41:18
-->
<template>
  <swiper ref="mySwiper" class="myswiper" :options="swiperOptions">
    <swiper-slide v-for="img in imgs" :key="img.index">
      <img :src="require('../assets/' + img.src + '.jpg')" class="images" />  <!--解析路径-->
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: "carrousel",
    data() {
      return {
        swiperOptions: {},
        imgs: [{ src: 1 }, { src: 2 }, { src: 3 }, { src: 4 }],
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper;
      },
    },
    mounted() {
      console.log("Current Swiper instance object", this.swiper);
      this.swiper.slideTo(0, 1000, false);
    },
  };
</script>
<style lang="scss" scoped>
  .myswiper {
    height: 400px;
    width: 375px;
    .images {
      width: 375px;
      background-size: cover;
    }
  }
</style>
```

- 一个坑：分页小圆点未显示