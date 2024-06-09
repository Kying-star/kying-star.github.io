/*
 * @Author: your name
 * @Date: 2021-11-04 21:49:51
 * @LastEditTime: 2021-11-05 16:49:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js/算法/岛屿问题/1020飞地的数量(中等)/index.js
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let [n, m] = [grid.length, grid[0].length]
  let count = 0;
  let dfs = (i, j, type) => {
    if (i < 0 || j < 0 || i >= n || j >= m) {
      return
    }
    if (grid[i][j] == 0) {
      return
    }
    if (type == 1) {
      count += 1
    }
    grid[i][j] = 0;
    dfs(i - 1, j, type)
    dfs(i + 1, j, type)
    dfs(i, j - 1, type)
    dfs(i, j + 1, type)
  }
  for (let i = 0; i < n; i++) {
    dfs(i, 0, 0)
    dfs(i, m - 1, 0)
  }
  for (let i = 0; i < m; i++) {
    dfs(0, i, 0)
    dfs(n - 1, i, 0)
  }
  console.log(grid)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        dfs(i, j, 1)
      }
    }
  }
  return count
};


let grid = [[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]
console.log(numEnclaves(grid));