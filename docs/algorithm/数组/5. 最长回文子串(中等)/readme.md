# 5. 最长回文子串
![](https://tva1.sinaimg.cn/large/e6c9d24ely1h3sxp1cyc7j20pu0ledgt.jpg)
[链接](https://leetcode.cn/problems/longest-palindromic-substring/)
## 思路
从中间向两端扩散
## 代码
```js
var longestPalindrome = function(s) {
    let max = ''

    for(let i=0; i< s.length; i++) {
        // 分奇偶， 一次遍历，每个字符位置都可能存在奇数或偶数回文
        helper(i, i)
        helper(i, i+1)
    }

    function helper(l, r) {
       while(s[l] == s[r] && l >= 0 && r < s.length){
           l--
           r++
       }
       let str = s.slice(l + 1 , r)
       if(str.length > max.length) max = str
    }
    return max
};
```