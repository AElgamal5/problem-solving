/**
 * 238. Product of Array Except Self
 * -----------------------
 * link: https://leetcode.com/problems/product-of-array-except-self/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description:store the prefix and the postfix result in arrays ans loop over them to get the final result

//time: O(3n) => O(n)
//space: O(3n) => O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = [];
  const prefix = [];
  const postfix = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefix[i] = 1;
    } else {
      prefix[i] = prefix[i - 1] * nums[i - 1];
    }
  }

  for (let i = nums.length - 1; i > -1; i--) {
    if (i === nums.length - 1) {
      postfix[i] = 1;
    } else {
      postfix[i] = postfix[i + 1] * nums[i + 1];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix[i] * postfix[i];
  }

  return answer;
};

// console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
//description:store the prefix and the postfix result in arrays ans loop over them to get the final result

//time: O(2n) => O(n)
//space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = [];
  let postfix = 1;

  //prefix loop
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      answer[i] = 1;
    } else {
      answer[i] = answer[i - 1] * nums[i - 1];
    }
  }
  console.log(answer);

  //postfix loop
  for (let i = nums.length - 2; i > -1; i--) {
    postfix *= nums[i + 1];
    answer[i] *= postfix;
  }

  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
