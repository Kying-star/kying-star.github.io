var coinChange = function (coins, amount) {
    // dp数组的定义：当目标金额为i时，至少需要dp[i]枚硬币凑出
    let dp = new Array(amount + 1).fill(amount + 1);
    // base case
    dp[0] = 0;
    // 外层for循环遍历所有状态的所有取值
    for (let i = 0; i < dp.length; i++) {
      //内层for循环求出所有选择的最小值
      for (let coin of coins) {
        // 子问题无解，跳过
        if (i - coin < 0) continue;
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
    return dp[amount] == amount + 1 ? -1 : dp[amount];
  };

console.log(coinChange([1,2,3] , 100))