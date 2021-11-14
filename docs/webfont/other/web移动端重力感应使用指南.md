# web移动端重力感应使用指南



#### 特别强调:

由于js原生的重力感应api有些复杂，所以本文使用[shrekshrek](https://github.com/shrekshrek)大神编写的重力感应库[orienter.js](https://github.com/shrekshrek/orienter)



#### 使用

```javascript
import Orienter from '../utils/orienter';
```

首先引入该库，路径无所谓，只要能获取到.js文件就行

```javascript
      let o = new Orienter();  //实例化重力感应对象
      o.onOrient = function (obj) { //获取重力感应参数
        //somecode
          obj.g   // gamma[扭转]
          obj.lon // longitude[纬度]
          obj.lat // latitude[精度]
      };
      o.on(); //启动重力感应
```

> 其中obj的属性就是重力感应参数



#### ios的重力感应失灵问题

在ios12.2以上的版本，加强了对网页操作手机硬件的限制，所以不能直接的调用重力感应的api

但是如果获取用户的允许(点击事件等，之后会跳出一个弹窗，就可以使用重力感应了

具体实现如下

首先判断手机是不是IOS系统

```javascript
function judgeClient() {
  if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    return 'ios';
  } else {
    return navigator.userAgent.indexOf('Android') > -1 ||
      navigator.userAgent.indexOf('Linux')
      ? 'android'
      : '';
  }
}
```

如果是ios系统，就调用允许使用

