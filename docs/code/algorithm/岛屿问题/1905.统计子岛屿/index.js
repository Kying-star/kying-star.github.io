/*
 * @Author: your name
 * @Date: 2021-11-05 17:34:26
 * @LastEditTime: 2021-11-05 19:31:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js/算法/岛屿问题/1905. 统计子岛屿/index.js
 */
/*
 * @Author: your name
 * @Date: 2021-11-05 17:34:26
 * @LastEditTime: 2021-11-06 16:49:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /js/算法/岛屿问题/1905. 统计子岛屿/index.js
 *//**
* @param {number[][]} grid1
* @param {number[][]} grid2
* @return {number}
*/
var countSubIslands = function (grid1, grid2) {
    let [m, n] = [grid1.length, grid1[0].length]
    let count = 0
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid1[i][j] == 0 && grid2[i][j] == 1) {
          dfs(grid2, i, j)
        }
      }
    }
    console.log(grid2);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid2[i][j] == 1) {
          count += 1
          dfs(grid2, i, j)
        }
      }
    }
    return count
  };
  let dfs = (grid, i, j) => {
    let [m, n] = [grid.length, grid[0].length]
    if (i < 0 || j < 0 || i >= m || j >= n) {
      return
    }
    if (grid[i][j] == 0) {
      return
    }
    grid[i][j] = 0
    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
    dfs(grid, i, j + 1)
  }
  