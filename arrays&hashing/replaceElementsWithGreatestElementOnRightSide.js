/**
 * 1299. Replace Elements with Greatest Element on Right Side
 * -----------------------
 * link: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
//space: O(1)
//time: O(n)

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let max = 0;
  let temp;
  for (let i = arr.length - 1; i > -1; i--) {
    if (max == 0) {
      max = arr[i];
      arr[i] = -1;
    } else {
      temp = arr[i];
      arr[i] = max;
      max = Math.max(max, temp);
    }
  }
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); //[18,6,6,6,1,-1]
console.log(replaceElements([17, 18, 5, 20, 6, 1])); //[20,20,20,6,1,-1]
console.log(replaceElements([400])); //[-1]
console.log("=".repeat(30));
