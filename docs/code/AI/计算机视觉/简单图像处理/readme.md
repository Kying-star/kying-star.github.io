# 简单图像处理

## 反转每个点的像素值
```js
    pixelReverse() {
        let imageData = this.imageData
        for (let i = 0; i < imageData.length; i += 4) {
            imageData[i] = 255 - imageData[i]
            imageData[i + 1] = 255 -  imageData[i + 1]
            imageData[i + 2] = 255 - imageData[i + 2]
        }
        return imageData
    }
```
## 通道加权
```js
    plxelAddRights(){
        let imageData = this.imageData
        for (let i = 0; i < imageData.length; i += 4) {
            let grayscale = imageData[i] * 0.5 + imageData[i + 1] * 0.25 + imageData[i + 2] * 0.25
            imageData[i] = grayscale
            imageData[i + 1] = grayscale
            imageData[i + 2] = grayscale
        }
        return imageData
    }
```
## 调整亮度
```js
    plxelBrightness(){
        let imageData = this.imageData
        for (let i = 0; i < imageData.length; i += 4) {
            imageData[i] -= -50
            imageData[i + 1] -=-50
            imageData[i + 2] -= -5
        }
        return imageData
    }
```
## 红色蒙版
```js
    plexlRed(){
        let imageData = this.imageData
        for (let i = 0; i < imageData.length; i += 4) {
            let r = imageData[i+0];
            let g = imageData[i+1];
            let b = imageData[i+2];
            let average = (r+g+b)/3;
            imageData[i+0] = average;
            imageData[i+1] = 0;
            imageData[i+2] = 0;
        }
        return imageData
    }
```
## opacity调整
```js
   opacity(){
        let imageData = this.imageData
        for (let i = 0; i < imageData.length; i += 4) {
            imageData[i+3] *= 0.5;
        }
        return imageData
    }
```