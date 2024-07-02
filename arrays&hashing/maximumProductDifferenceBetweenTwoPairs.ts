/**
 * 1913. Maximum Product Difference Between Two Pairs
 * ---------------------------
 * link: https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: loop over the given array to get max 2 nums and min 2 nums
 *
 * time : O(n)
 * space : O(1)
 */

function maxProductDifference(nums: number[]): number {
  let w: number = Number.NEGATIVE_INFINITY;
  let x: number = Number.NEGATIVE_INFINITY;
  let y: number = Number.POSITIVE_INFINITY;
  let z: number = Number.POSITIVE_INFINITY;

  for (const num of nums) {
    if (num > w) {
      x = w;
      w = num;
    } else if (num > x) {
      x = num;
    }

    if (num < y) {
      z = y;
      y = num;
    } else if (num < z) {
      z = num;
    }
  }

  return w * x - y * z;
}

console.log(maxProductDifference([5, 6, 2, 7, 4]));
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]));
