/*
 * @Author: your name
 * @Date: 2021-10-24 20:32:50
 * @LastEditTime: 2021-11-04 21:19:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js/算法/剑指offer/index.js
 */
src = imread("lena.bmp");
img = mat2gray(src);
gx = [-1 0 1; -1 0 1; -1 0 1];
gy = [1 1 1; 0 0 0; -1 - 1 - 1];

img1 = conv2(gx, img);
img2 = conv2(gy, img);

subplot(1, 3, 1)
imshow(img)

subplot(1, 3, 2)
imshow(img1)

subplot(1, 3, 3)
imshow(img2)
