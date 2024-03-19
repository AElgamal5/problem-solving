/**
 * 535. Encode and Decode TinyURL
 * -----------------------
 * link: https://leetcode.com/problems/encode-and-decode-tinyurl/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description: make array to save long URLs and pointer as short URLs

//time: O(1)
//space: O(1)

const arr = [];
let p = 0;
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  arr.push(longUrl);
  return p++;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return arr[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
// console.log(decode(encode("https://leetcode.com/problems/design-tinyurl")));

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//description: use 2 hash maps

const long = new Map();
const short = new Map();
const BASE = "http://tinyurl.com/";
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  if (long.has(longUrl)) return long.get(longUrl);

  let shortUrl = BASE + `${long.size}`;
  long.set(longUrl, shortUrl);
  short.set(shortUrl, longUrl);

  return long.get(longUrl);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return short.get(shortUrl);
};

console.log(decode(encode("https://leetcode.com/problems/design-tinyurl")));
console.log(decode(encode("https://leetcode.com/problems/design-tinyurl1")));
console.log(decode(encode("https://leetcode.com/problems/design-tinyurl2")));
console.log(long);
console.log(short);
