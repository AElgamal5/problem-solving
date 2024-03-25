/**
 * 121. Best Time to Buy and Sell Stock
 * -----------------------
 * link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description: brute force

//time: O(n^2)
//space: O(1)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      profit = Math.max(profit, prices[j] - prices[i]);
    }
  }

  return profit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//description: 2 pointers

//time: O(n)
//space: O(1)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let r = 1;
  let l = 0;

  while (r < prices.length) {
    console.log(l, r, profit);
    if (prices[l] > prices[r]) {
      l = r;
    } else {
      profit = Math.max(profit, prices[r] - prices[l]);
    }
    r++;
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1]));
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
