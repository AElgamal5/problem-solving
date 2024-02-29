/**
 * 1189. Maximum Number of Balloons
 * -----------------------
 * link: https://leetcode.com/problems/maximum-number-of-balloons
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//solution description: hash mapping
//count each char in giving string
//reduce the number of characters by ratio of existing in 'balloon'

//space: O(n)
//time: O(2n) => O(n)

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const map = new Map();
  let result = 0;

  for (let i = 0; i < text.length; i++) {
    map.set(text.charAt(i), (map.get(text.charAt(i)) || 0) + 1);
  }

  while (map.get("b")) {
    map.set("b", (map.get("b") || 0) - 1);
    map.set("a", (map.get("a") || 0) - 1);
    map.set("l", (map.get("l") || 0) - 2);
    map.set("o", (map.get("o") || 0) - 2);
    map.set("n", (map.get("n") || 0) - 1);

    if (
      map.get("b") < 0 ||
      map.get("a") < 0 ||
      map.get("l") < 0 ||
      map.get("o") < 0 ||
      map.get("n") < 0
    ) {
      return result;
    }

    result++;
  }

  return result;
};

// console.log(maxNumberOfBalloons("nlaebolko"));
// console.log(maxNumberOfBalloons("loonbalxballpoon"));
// console.log(maxNumberOfBalloons("leetcode"));

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//solution description:

//space: O(1)
//time: O(2*n) => O(n)

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let b = 0;
  let a = 0;
  let l = 0;
  let o = 0;
  let n = 0;
  let result = 0;

  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == "b") {
      b++;
    } else if (text.charAt(i) == "a") {
      a++;
    } else if (text.charAt(i) == "l") {
      l++;
    } else if (text.charAt(i) == "o") {
      o++;
    } else if (text.charAt(i) == "n") {
      n++;
    }
  }

  while (b) {
    b--;
    a--;
    l--;
    l--;
    o--;
    o--;
    n--;

    if (b < 0 || a < 0 || l < 0 || o < 0 || n < 0) {
      return result;
    }

    result++;
  }

  return result;
};

// console.log(maxNumberOfBalloons("nlaebolko"));
// console.log(maxNumberOfBalloons("loonbalxballpoon"));
// console.log(maxNumberOfBalloons("leetcode"));

//---------------------------------------------------------------
//------------------------3rd trial------------------------------
//---------------------------------------------------------------

//solution description:

//space: O(1)
//time: O(n)

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let b = 0;
  let a = 0;
  let l = 0;
  let o = 0;
  let n = 0;

  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == "b") {
      b++;
    } else if (text.charAt(i) == "a") {
      a++;
    } else if (text.charAt(i) == "l") {
      l++;
    } else if (text.charAt(i) == "o") {
      o++;
    } else if (text.charAt(i) == "n") {
      n++;
    }
  }

  l = Math.floor(l / 2);
  o = Math.floor(o / 2);

  return Math.min(b, a, l, o, n);
};

console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
console.log(maxNumberOfBalloons("leetcode"));
