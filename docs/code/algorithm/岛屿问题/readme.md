 # 岛屿问题

 岛屿系列算法问题是经典的面试高频题，虽然基本的问题并不难，但是这类问题有一些有意思的扩展，比如求子岛屿数量，求形状不同的岛屿数量等等，本文就来把这些问题一网打尽。

 大体思路都是一套，用BFS或者DFS遍历整个图。

 ## 模版代码

 ```javascript
 /**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let [n, m] = [grid.length, grid[0].length]
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == "1") {
        count += 1;
        dfs(grid, i, j)
      }
    }
  }
  return count
};

let dfs = (grid, i, j) => {
  let [n, m] = [grid.length, grid[0].length]
  if (i < 0 || j < 0 || i >= n || j >= m) {
    return
  }
  if (grid[i][j] == "0") {
    return
  }
  grid[i][j] = "0"
  dfs(grid, i - 1, j)
  dfs(grid, i + 1, j)
  dfs(grid, i, j - 1)
  dfs(grid, i, j + 1)
}

 ```