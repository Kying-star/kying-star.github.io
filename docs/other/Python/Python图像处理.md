# Python图像处理



## 首先下库（opencv）

```python
pip install opencv-python
```

## 读入图像

opencv中的读取图像主要使用`cv2`

```python
#读入图像并显示保存
import cv2

#读取图片
img = cv2.imread("test.jpg")

#显示图像
cv2.imshow("Demo", img)

#等待显示
cv2.waitKey(0)
cv2.destroyAllWindows()

#写入图像
cv2.imwrite("testyxz.jpg", img)
```

##### 运行

<img src="D:\blog\vuepress-starter\docs\.vuepress\public\python\readimg.png" alt="image-20201027164419063" style="zoom: 25%;" />

`cv2.imread`可选参数

```
 cv2.IMREAD_UNCHANGED (图像不可变)
 cv2.IMREAD_GRAYSCALE (灰度图像)
 cv2.IMREAD_COLOR (读入彩色图像)
 cv2.COLOR_BGR2RGB (图像通道BGR转成RGB)
```

举例，将图片转换成灰度图像

```python
img = cv2.imread("test.jpg",cv2.IMREAD_GRAYSCALE)
```

<img src="D:\blog\vuepress-starter\docs\.vuepress\public\python\gray.png" alt="image-20201027165012424" style="zoom:25%;" />

## OpenCV像素处理

##### 获取像素

​		灰度图像直接返回灰度值，彩色图像则返回B、G、R三个分量。注意OpenCV读取图像是BGR存储显示，需要转换为RGB再进行图像处理。

> ​	在`img = cv2.imread("test.jpg")`,我们得到的img是一个三维数组，前两维作为图片的坐标，后一位是像素点的像素值，所以我们可以用索引获取像素值。

###### 获取某点像素参数

```
img[100,100]
```

###### 获取一个矩形区域的像素

```
# 行100-200 列150-250
img[100:200, 150:250] 
```

获取某个点的B、G、R三值

```python
b = img[100, 100, 0]
g = img[100, 100, 1]
r = img[100, 100, 2]
```

![image-20201027171400875](D:\blog\vuepress-starter\docs\.vuepress\public\python\rgb.png)

------



#### 一般修改像素

修改某个点的像素

```
img[100,100] = [255,255,255]
```

修改某个矩形区域的像素

```
img[100:200, 150:250] = [255,255,255]
```

<img src="D:\blog\vuepress-starter\docs\.vuepress\public\python\changeimg.png" alt="image-20201027170112908" style="zoom:25%;" />

## 获取图像属性

#### 1.形状-shape

通过shape关键字获取图像的形状，返回包含行数、列数、通道数的元祖。其中灰度图像返回行数和列数，彩色图像返回行数、列数和通道数。

```python
import cv2

# 读取图片
img = cv2.imread("test.jpg")

print(img.shape)

# 显示图像
cv2.imshow("Demo", img)


# 等待显示
k = cv2.waitKey(0)
cv2.destroyAllWindows()

# 写入图像
cv2.imwrite("testyxz.jpg", img)
if k == 27:
    cv2.destroyAllWindows()
```

![image-20201027173614496](D:\blog\vuepress-starter\docs\.vuepress\public\python\shape.png)

高865px,宽580px,通道数为3(BGR)

#### 2.像素数目-size

通过size关键字获取图像的像素数目，其中灰度图像返回行数 * 列数，彩色图像返回行数 * 列数 * 通道数。代码如下：

```python
# 获取像素数目
print(img.size)
```

![image-20201027173939737](D:\blog\vuepress-starter\docs\.vuepress\public\python\size.png)

#### 3.图像类型-dtype

通过dtype关键字获取图像的数据类型，通常返回uint8。代码如下：

```python
print(img.dtype)
```

![image-20201027174251904](D:\blog\vuepress-starter\docs\.vuepress\public\python\type.png)

## 获取感兴趣ROI区域

​		ROI（Region of Interest）表示感兴趣区域。它是指从被处理图像以方框、圆形、椭圆、不规则多边形等方式勾勒出需要处理的区域。可以通过各种算子（Operator）和函数求得感兴趣ROI区域，并进行图像的下一步处理，被广泛应用于热点地图、人脸识别、图像分割等领域。

#### 获取矩形区域

```python
# -*- coding:utf-8 -*-
import cv2
import numpy as np

# 读取图片
img = cv2.imread("test.jpg", cv2.IMREAD_UNCHANGED)

# 定义200*100矩阵 3对应BGR
face = np.ones((200, 100, 3))

# 显示原始图像
cv2.imshow("Demo", img)

# 显示ROI区域
face = img[200:500, 300:600]
cv2.imshow("face", face)

# 等待显示
cv2.waitKey(0)
cv2.destroyAllWindows()
```

<img src="D:\blog\vuepress-starter\docs\.vuepress\public\python\sqlit.png" alt="image-20201027191820947" style="zoom:25%;" />



#### 融合图像

```python
# -*- coding:utf-8 -*-
import cv2
import numpy as np

# 读取图片
img = cv2.imread("test.jpg", cv2.IMREAD_UNCHANGED)

# 定义200*100矩阵 3对应BGR
face = np.ones((250, 250, 3))

# 显示ROI区域
face = img[200:450, 300:550]
img[0:250, 0:250] = face

# 显示原始图像
cv2.imshow("Demo", img)

# 等待显示
cv2.waitKey(0)
cv2.destroyAllWindows()
```

<img src="D:\blog\vuepress-starter\docs\.vuepress\public\python\content.png" alt="image-20201027194507607" style="zoom:25%;" />

## 图像通道处理

#### 通道拆分

位图一般由三原色组成，通过`cv2.split(yourImg)`可以将拆分为三个二维矩阵

```python
# -*- coding:utf-8 -*-
import cv2
import numpy as np

# 读取图片
img = cv2.imread("test.jpg", cv2.IMREAD_UNCHANGED)

b,g,r = cv2.split(img)

cv2.imshow("b", b)
cv2.imshow("g", g)
cv2.imshow("r", r)


# 等待显示
cv2.waitKey(0)
cv2.destroyAllWindows()
```

> 也可以获取某一个

```python
b = cv2.split(a)[0]
g = cv2.split(a)[1]
r = cv2.split(a)[2]
```

<img src="D:\blog\vuepress-starter\docs\.vuepress\public\python\three.png" alt="image-20201027201326471" style="zoom:25%;" />

#### 通道合并

通过`cv2.merge([...])`将三个二维矩阵合成为位图

```python
# -*- coding:utf-8 -*-
import cv2
import numpy as np

# 读取图片
img = cv2.imread("test.jpg", cv2.IMREAD_UNCHANGED)

b, g, r = cv2.split(img)

cv2.imshow("b", b)
cv2.imshow("g", g)
cv2.imshow("r", r)
m = cv2.merge([b, g, r])
cv2.imshow("m", m)

# 等待显示
cv2.waitKey(0)
cv2.destroyAllWindows()
```

<img src="D:\blog\vuepress-starter\docs\.vuepress\public\python\onr.png" alt="image-20201027201457966" style="zoom:25%;" />

## 图像平滑



#### 图像增强

​		图像增强是对图像进行处理，使其比原始图像更适合于特定的应用，它需要与实际应用相结合。对于图像的某些特征如边缘、轮廓、对比度等，图像增强是进行强调或锐化，以便于显示、观察或进一步分析与处理。

#### 图像平滑

​		图像平滑是一种区域增强的算法，平滑算法有邻域平均法、中指滤波、边界保持类滤波等。在图像产生、传输和复制过程中，常常会因为多方面原因而被噪声干扰或出现数据丢失，降低了图像的质量（某一像素，如果它与周围像素点相比有明显的不同，则该点被噪声所感染）。这就需要对图像进行一定的增强处理以减小这些缺陷带来的影响。
简单平滑-邻域平均法

#### 邻域平均法

​		图像简单平滑是指通过邻域简单平均对图像进行平滑处理的方法，用这种方法在一定程度上消除原始图像中的噪声、降低原始图像对比度的作用。它利用卷积运算对图像邻域的像素灰度进行平均，从而达到减小图像中噪声影响、降低图像对比度的目的。
但邻域平均值主要缺点是在降低噪声的同时使图像变得模糊，特别在边缘和细节处，而且邻域越大，在去噪能力增强的同时模糊程度越严重。

### 为图片增加噪音

<img src="D:\blog\vuepress-starter\docs\.vuepress\public\python\noise.png" alt="image-20201027203210248" style="zoom:25%;" />



### 均值滤波

```python
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 读取图片
img = cv2.imread('noise.jpg')
source = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# 均值滤波
result = cv2.blur(source, (5, 5))

# 显示图形
titles = ['Source Image', 'Blur Image']
images = [source, result]
for i in range(2):
    plt.subplot(1, 2, i + 1), plt.imshow(images[i], 'gray')
    plt.title(titles[i])
    plt.xticks([]), plt.yticks([])
plt.show()
```

<img src="D:\blog\vuepress-starter\docs\.vuepress\public\python\blur.png" alt="image-20201027204627769" style="zoom: 50%;" />

### 方框滤波

```python
# encoding:utf-8
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 读取图片
img = cv2.imread('noise.jpg')
source = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# 方框滤波
result = cv2.boxFilter(source, -1, (5, 5), normalize=1)

# 显示图形
titles = ['Source Image', 'BoxFilter Image']
images = [source, result]
for i in range(2):
    plt.subplot(1, 2, i + 1), plt.imshow(images[i], 'gray')
    plt.title(titles[i])
    plt.xticks([]), plt.yticks([])
plt.show()

```

<img src="D:\blog\vuepress-starter\docs\.vuepress\public\python\filterpng" alt="image-20201027205149274" style="zoom:50%;" />

### 高斯滤波

```python
# encoding:utf-8
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 读取图片
img = cv2.imread('noise.jpg')
source = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# 高斯滤波
result = cv2.GaussianBlur(source, (3, 3), 0)

# 显示图形
titles = ['Source Image', 'GaussianBlur Image']
images = [source, result]
for i in range(2):
    plt.subplot(1, 2, i + 1), plt.imshow(images[i], 'gray')
    plt.title(titles[i])
    plt.xticks([]), plt.yticks([])
plt.show()
```

<img src="D:\blog\vuepress-starter\docs\.vuepress\public\python\gs.png" alt="image-20201027205314606" style="zoom:50%;" />

### 中值滤波

```python
# encoding:utf-8
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 读取图片
img = cv2.imread('noise.jpg')
source = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# 高斯滤波
result = cv2.medianBlur(img, 3)

# 显示图形
titles = ['Source Image', 'medianBlur Image']
images = [source, result]
for i in range(2):
    plt.subplot(1, 2, i + 1), plt.imshow(images[i], 'gray')
    plt.title(titles[i])
    plt.xticks([]), plt.yticks([])
plt.show()
```

<img src="D:\blog\vuepress-starter\docs\.vuepress\public\python\m.png" alt="image-20201027205531219" style="zoom:50%;" />





# Refs

[Python图像处理及图像识别](https://blog.csdn.net/eastmount/category_9278090.html)

[Python矩阵库----numpy](https://www.runoob.com/numpy/numpy-tutorial.html)

[Python绘图库----Matplotlib](https://www.runoob.com/numpy/numpy-matplotlib.html)