# React CSS



- 内联样式
- 声明样式
- 引入样式
- CSS modules 模块化
- Style-component

### 1、内联样式(scope)

相当于html的内联样式。但是可以使用变量

```js
class App extends React.Component {
  // ...
  render() {
    return (
      <div style={{ background: '#eee', width: '200px', height: '200px'}}>
        <p style= {{color:'red', fontSize:'40px'}}>行内样式</p>
      </div>
    )
  }
}
```

### 2、声明样式(scope)

内联样式的改进写法

```js
class App extends React.Component {
 
//...
 
 const style1={    
      background:'#eee',
      width:'200px',
      height:'200px'
    }
 
  const style2={    
      color:'red',
      fontSize:'40px'
    }
 
  render() {
    return (
      <div style={style1}>
        <p style= {style2}>行内样式</p>
      </div>
    )
  }
}
```

### 3、引入样式(无scope)

引入样式就是将CSS文件写下外部，在引入使用，这种普通的引入样式实际上会有一定的问题

 **css**

```js
.person{
    width: 60%;
    margin:16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding:16px;
    text-align: center;
}
```

 **Js**

```js
import React from 'react';
import './Person.css';
class App extends React.Component {
 
  //....  
 
  render() {
 
    return (
      <div className='person'>
        <p>person:Hello world</p>
      </div> 
    )
  }
}
 
export default App;
```

这种做法并没有scope,会导致全局样式冲突。因此引入CSS Modules



### 4、CSS Modules

CSS Modules 的做法就是通过配置将.css文件进行编译，编译后在每个用到css的组件中的css类名都是独一无二的，从而实现CSS的局部作用域。具体原理可以看看阮一峰老师的博客

> person.module.css

```css
.person{
    width: 60%;
    margin:16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding:16px;
    text-align: center;
}
```

> person.js

```js
import React, { Component } from 'react';
 
//局部样式
import styles from './Person.module.css';
 
//全局样式
import '../App.css'
class App extends Component {
  
  render() {
 
    return (
      <div className={styles.person}>
        <p className='fz'>person:Hello world</p>
      </div> 
    )
  }
}
 
export default App;
```

### 5、

...















