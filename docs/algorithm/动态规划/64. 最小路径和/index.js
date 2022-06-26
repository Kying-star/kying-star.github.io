/**
 * @param {number[][]} grid
 * @return {number}
 */
 let memo = new Array(3).fill(new Array(3).fill(-1));
 var minPathSum = function(grid) {
    let [ m , n ] = [ grid.length , grid[0].length ]
    memo[0][0] = grid[0][0]
    let ans = dp(grid , m - 1 , n - 1)
        console.log(memo)
    return ans
};
let dp = (grid , i , j) => {
    console.log(i, j)
    if( i == 0 && j == 0) {
        return grid[0][0]
    }
    if( i < 0 || j < 0 ) {
        return 1e9
    }
    if(memo[i][j] != -1) {
        return memo[i][j]
    }
    memo[i][j] = Math.min(
        dp(grid , i - 1 , j),
        dp(grid , i , j - 1)
    ) + grid[i][j]
    return memo[i][j]
}
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))