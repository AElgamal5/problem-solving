/**
 * 347. Top K Frequent Elements
 * -----------------------
 * link: https://leetcode.com/problems/top-k-frequent-elements/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//solution description:
//count number of occurrences of each number and save it to a map
// loop over the map in k times to get top frequent element

//space: O(n)
//time: O(k log n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (let i = 0; i < k; i++) {
    let max = -1;
    let maxKey = -1;
    map.forEach((value, key) => {
      if (value > max) {
        max = value;
        maxKey = key;
      }
    });
    map.delete(maxKey);
    result.push(maxKey);
  }

  return result;
};

// console.log(topKFrequent([5, 1, 1, 2, 1, 2, 3, 5, 5, 5], 2));
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//solution description:make array of count count[1] = [1,2] means 1 and 2 has frequency of 1 time

//space: O(n)
//time: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  const count = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  map.forEach((value, key) => {
    count[value] = count[value] || [];
    count[value].push(key);
  });

  for (let i = count.length - 1; i > 0; i--) {
    result.push(...(count[i] || []));
  }

  return result.slice(0, k);
};

// console.log(topKFrequent([5, 1, 1, 2, 1, 2, 3, 5, 5, 5], 3));
console.log(topKFrequent([-1, -1], 1));
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 3));
// console.log(topKFrequent([1], 1));
