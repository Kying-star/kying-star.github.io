 # 695. 岛屿的最大面积
 ![](https://tva1.sinaimg.cn/large/008i3skNgy1gw4ehtt4l3j30il0ondi4.jpg)

 思路
 
 洪范的时候顺便统计

 ```javascript
var maxAreaOfIsland = function (grid) {
  let [m, n] = [grid.length, grid[0].length]
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        count = Math.max(count, dfs(grid, i, j))
      }
    }
  }
  return count
};
let dfs = (grid, i, j) => {
  let [m, n] = [grid.length, grid[0].length]
  if (i < 0 || j < 0 || i >= m || j >= n) {
    return 0
  }
  if (grid[i][j] == 0) {
    return 0
  }
  grid[i][j] = 0;
  return 1 + dfs(grid, i + 1, j) + dfs(grid, i - 1, j) + dfs(grid, i, j + 1) + dfs(grid, i, j - 1)
}
 ```