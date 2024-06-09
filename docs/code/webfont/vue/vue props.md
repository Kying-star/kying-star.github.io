## vue props

---

子组件

```vue
<template>
  <div class="video">
    <img :src="require(`../../assets/${image}.jpg`)" class="goodsImage" />
    <li>{{ txt }}</li>
    <li>{{ tip }}</li>
    //直接使用{{}}语法即可
  </div>
</template>

<script>
  export default {
    props: ["image", "txt", "tip"], //定义传入参数
    components: {},
    data() {
      return {};
    },
  };
</script>
```

父组件调用

```vue
<Cvideo :image="item.image" :txt="item.txt" :tip="item.tip"></Cvideo>
//Cvideo为导入组件的自定义名称 //:语法使""为可改变的变量
```
