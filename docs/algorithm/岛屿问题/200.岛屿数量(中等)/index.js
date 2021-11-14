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
