# 797. 所有可能的路径(中等)

[链接](https://leetcode-cn.com/problems/all-paths-from-source-to-target/)

<img src="https://tva1.sinaimg.cn/large/008i3skNly1gwyrvc1ra1j30r80hgta5.jpg" alt="image-20211201235502341" style="zoom:50%;" />

## 思路
深度优先搜索，利用栈的特性储存途径节点。

## 代码
```javascript
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let paths = []
    let path = []
    let dfs = (graph,index,len) => {
        if(index == len){
            paths.push([...path])
            return
        }
        for(let i = 0 ; i < graph[index].length ; i++){
            path.push(graph[index][i])
            dfs(graph, graph[index][i],len)
            path.pop(graph[index][i])
        }
    }
    path.push(0)
    dfs(graph,0,graph.length - 1)
    return paths
};

```