/**
 * 2002. Maximum Product of the Length of Two Palindromic Subsequences
 * -----------------------
 * link: https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description
 * 1- using bit mask to check if the 2 subsequences are disjoint or not:  0 & x = 0
 * - we will have bit for each char in string 1 if char taken and 0 otherwise
 * - 0100 0010 0001 & 0001 1000 0010
 *
 * 2- to get all possible subsequences form string with max size 12 char
 * - we have 2^12 option starting from 1 => at least have one char
 * - end to (2^11)-1 , so we could use for loop in this
 *
 * 3-
 */

//time: O()
//space: O()

/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function (s) {};
