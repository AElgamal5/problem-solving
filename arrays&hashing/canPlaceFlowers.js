/**
 * 605. Can Place Flowers
 * -----------------------
 * link: https://leetcode.com/problems/can-place-flowers/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//solution description: check if the i, i-1 and i+1 is all zeros to plant

//space: O(1)
//time: O(n)

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] == 0 &&
      (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) &&
      (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n === 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 1, 0, 1], 1)); //false
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); //false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)); //false
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 1, 0, 0], 1)); // true
