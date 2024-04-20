/**
 * 2215. Find the Difference of Two Arrays
 * -----------------------
 * link: https://leetcode.com/problems/find-the-difference-of-two-arrays/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: using sets to make answer unique
 *
 * time : O(n + m)
 * space : O(n + m)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
let findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const ansSet1 = new Set();
  const ansSet2 = new Set();

  for (const num of nums1) {
    if (!set2.has(num)) {
      ansSet1.add(num);
    }
  }
  for (const num of nums2) {
    if (!set1.has(num)) {
      ansSet2.add(num);
    }
  }

  return [[...ansSet1], [...ansSet2]];
};

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

/**
 * description: more efficient
 *
 * time : O(n + m)
 * space : O(n + m)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
let findDifference2 = function (nums1, nums2) {
  const answer = [[], []];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  set1.forEach((num) => {
    if (!set2.has(num)) {
      answer[0].push(num);
    }
  });

  set2.forEach((num) => {
    if (!set1.has(num)) {
      answer[1].push(num);
    }
  });

  return answer;
};

console.log(findDifference2([1, 2, 3], [2, 4, 6])); // [[1,3],[4,6]]
console.log(findDifference2([1, 2, 3, 3], [1, 1, 2, 2])); //[[3],[]]
