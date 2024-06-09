/*
 * @Author: your name
 * @Date: 2021-11-05 17:12:54
 * @LastEditTime: 2021-11-05 17:24:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js/算法/岛屿问题/695. 岛屿的最大面积/index.js
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
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