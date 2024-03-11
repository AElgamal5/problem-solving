/**
 * 912. Sort an Array
 * -----------------------
 * link: https://leetcode.com/problems/sort-an-array
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description:merge sort

//time: O(n log n)
//space: O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  mergeSort(nums);
  return nums;
};

/**
 * @param {number[]} array
 */
function mergeSort(array) {
  let length = array.length;

  if (length <= 1) return;

  let middle = Math.floor(length / 2);
  let leftArray = new Array(middle);
  let rightArray = new Array(length - middle);
  let i = 0;
  let j = 0;

  while (i < length) {
    if (i < middle) {
      leftArray[i] = array[i];
    } else {
      rightArray[j] = array[i];
      j++;
    }
    i++;
  }

  mergeSort(leftArray);

  mergeSort(rightArray);

  merge(leftArray, rightArray, array);
}

/**
 * @param {number[]} leftArray
 * @param {number[]} rightArray
 * @param {number[]} array
 */
function merge(leftArray, rightArray, array) {
  let leftSize = Math.floor(array.length / 2);
  let rightSize = array.length - leftSize;

  let i = 0;
  let l = 0;
  let r = 0;

  while (l < leftSize && r < rightSize) {
    if (leftArray[l] < rightArray[r]) {
      array[i] = leftArray[l];
      l++;
    } else {
      array[i] = rightArray[r];
      r++;
    }

    i++;
  }

  while (l < leftSize) {
    array[i] = leftArray[l];
    i++;
    l++;
  }

  while (r < rightSize) {
    array[i] = rightArray[r];
    i++;
    r++;
  }
}

console.log(sortArray([5, 2, 0, 3, 1, 6]));
