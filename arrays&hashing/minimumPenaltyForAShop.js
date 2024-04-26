/**
 * 2483. Minimum Penalty for a Shop
 * -----------------------
 * link: https://leetcode.com/problems/minimum-penalty-for-a-shop/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 * 1. make new array for prefix for 'N'
 * 2. make new array for postfix for 'Y'
 * 3. make new array for penalty that sum for prefix and postfix and every index
 *
 * time : O(n)
 * space : O(n)
 */

/**
 * @param {string} customers
 * @return {number}
 */
let bestClosingTime = function (customers) {
  let length = customers.length + 1;
  let prefix = new Array(length);
  let postfix = new Array(length);

  let count = 0;
  for (let i = 0; i < length; i++) {
    prefix[i] = count;
    if (customers[i] === "N") count++;
  }

  count = 0;
  for (let i = length - 1; i > -1; i--) {
    if (customers[i] === "Y") count++;
    postfix[i] = count;
  }

  let min = Infinity;
  let index = 0;
  for (let i = 0; i < length; i++) {
    let penalty = prefix[i] + postfix[i];
    if (penalty < min) {
      min = penalty;
      index = i;
    }
  }

  return index;
};

console.log(bestClosingTime("NYNYY"));
console.log(bestClosingTime("YYNY"));
