/*
 * @Author: your name
 * @Date: 2021-11-04 20:49:13
 * @LastEditTime: 2021-11-04 21:15:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /js/算法/岛屿问题/1254.统计封闭岛屿的数目(中等)/index.js
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  let [n, m] = [grid.length, grid[0].length]
  let count = 0;
  for (let i = 0; i < n; i++) {
    dfs(grid, i, 0)
    dfs(grid, i, m - 1)
  }
  for (let i = 0; i < m; i++) {
    dfs(grid, 0, i)
    dfs(grid, n - 1, i)
  }
  console.log(grid)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 0) {
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
  if (grid[i][j] == 1) {
    return
  }
  grid[i][j] = 1
  dfs(grid, i - 1, j)
  dfs(grid, i + 1, j)
  dfs(grid, i, j - 1)
  dfs(grid, i, j + 1)
}