/**
 * 88. Merge Sorted Array
 * ---------------------------
 * link: https://leetcode.com/problems/merge-sorted-array/
 */

/**
 * description:
 * Use 3 pointers:
 * 1- at the end of nums1 range
 * 2- at the end of nums2 range
 * 3- at the end of nums1 array
 * and check for the maximum to put first from right to left
 *
 * time : O(n)
 * space : O(1)
 */

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1,
    j = n - 1,
    k = n + m - 1;

  while (k > -1) {
    if (
      (nums1[i] ?? Number.NEGATIVE_INFINITY) >
      (nums2[j] ?? Number.NEGATIVE_INFINITY)
    ) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
//-----------------------------------------------//
nums1 = [4, 5, 6, 0, 0, 0];
nums2 = [1, 2, 3];
merge(nums1, m, nums2, n);
console.log(nums1);
//-----------------------------------------------//
nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
m = 6;
nums2 = [1, 2, 3];
//-----------------------------------------------//
merge(nums1, m, nums2, n);
console.log(nums1);
