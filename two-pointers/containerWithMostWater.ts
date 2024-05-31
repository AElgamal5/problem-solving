/**
 * 11. Container With Most Water
 * ---------------------------
 * link: https://leetcode.com/problems/container-with-most-water/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: using 2 pointers to get max left value and max right value
 *
 * time : O(n)
 * space : O(1)
 */

function maxArea(height: number[]): number {
  let result = 0;
  let l = 0,
    r = height.length - 1;

  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r]);

    if (area > result) result = area;

    if (height[l] < height[r]) l++;
    else r--;
  }

  return result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([2, 3, 4, 5, 18, 17, 6])); // 17
