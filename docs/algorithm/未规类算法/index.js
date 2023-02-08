var minimumTotal = function(triangle) {
    let dp = Array.from(triangle,(el)=>Array(el.length).fill(0))
    dp[0][0] = triangle[0][0]
    // console.log(dp)
    for(let i = 1 ; i < triangle.length ; i++){

        for(let j = 0 ; j < triangle[i].length ; j++){
            if(j == 0){
                dp[i][j] = dp[i - 1][j] + triangle[i][j]
                continue
            }
            if( i == j){
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
                continue
            }
            dp[i][j] = Math.min(dp[i - 1][j] , dp[i - 1][j - 1]) + triangle[i][j]
        }
    }
    console.log(dp)
    return Math.min(...dp[triangle.length - 1])
};
console.log(minimumTotal([
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3]]))