/**
 * 496. Next Greater Element I
 * -----------------------
 * link: https://leetcode.com/problems/next-greater-element-i/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//solution description:
//loop over the two array if you found the number from the second array check
// if it less than any number of the second array after the found position

//space: O(n)
//time: O(n^2)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    let temp = -1;
    let found = false;
    for (let j = 0; j < nums2.length; j++) {
      if (found && nums1[i] < nums2[j]) {
        temp = nums2[j];
        j = nums2.length;
      } else if (nums1[i] === nums2[j]) {
        found = true;
      }
    }
    result.push(temp);
  }

  return result;
};

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//solution description:
//loop over the two array if you found the number from the second array check
// if it less than any number of the second array after the found position

//space: O(n)
//time: O(n^2)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let result = [];

  let map = new Map();
  map.set(nums2[nums2.length - 1], -1);
  let max = nums2[nums2.length - 1];

  for (let i = nums2.length - 2; i > -1; i--) {
    if (nums2[i] < nums2[i + 1]) {
      map.set(nums2[i], nums2[i + 1]);
    } else if (nums2[i] < max) {
      map.set(nums2[i], max);
    } else {
      map.set(nums2[i], -1);
    }

    if (max < nums2[i]) {
      max = nums2[i];
    }
  }

  for (let i = 0; i < nums1.length; i++) {
    result.push(map.get(nums1[i]));
  }

  return result;
};

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
// console.log(nextGreaterElement([4, 1, 2], [2, 5, 7, 8, 1, 3, 10]));
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
console.log(
  nextGreaterElement(
    [
      137,
      59,
      92,
      122,
      52,
      131,
      79,
      ,
      94,
      171,
      141,
      86,
      169,
      199,
      248,
      120,
      196,
      168,
      77,
      71,
      5,
      198,
      215,
      230,
      176,
      87,
      189,
      206,
      115,
      76,
      13,
      216,
      197,
      26,
      183,
      54,
      250,
      27,
      109,
      140,
      147,
      25,
      96,
      105,
      30,
      207,
      241,
      8,
      217,
      40,
      0,
      35,
      221,
      191,
      83,
      132,
      9,
      144,
      12,
      91,
      175,
      65,
      170,
      149,
      174,
      82,
      102,
      167,
      62,
      70,
      44,
      143,
      10,
      153,
      160,
      142,
      188,
      81,
      146,
      212,
      15,
      162,
      103,
      163,
      123,
      48,
      245,
      116,
      192,
      14,
      211,
      126,
      63,
      180,
      88,
      155,
      224,
      148,
      134,
      158,
      119,
      165,
      130,
      112,
      166,
      93,
      125,
      1,
      11,
      208,
      150,
      100,
      106,
      194,
      124,
      2,
      184,
      75,
      113,
      104,
      18,
      210,
      202,
      111,
      84,
      223,
      173,
      238,
      41,
      33,
      154,
      47,
      244,
      232,
      249,
      60,
      164,
      227,
      253,
      56,
      157,
      99,
      179,
      6,
      203,
      110,
      127,
      152,
      252,
      55,
      185,
      73,
      67,
      219,
      22,
      156,
      118,
      234,
      37,
      193,
      90,
      187,
      181,
      23,
      220,
      72,
      255,
      58,
      204,
      7,
      107,
      239,
      42,
      139,
      159,
      95,
      45,
      242,
      145,
      172,
      209,
      121,
      24,
      21,
      218,
      246,
      49,
      46,
      243,
      178,
      64,
      161,
      117,
      20,
      214,
      17,
      114,
      69,
      182,
      85,
      229,
      32,
      129,
      29,
      226,
      136,
      39,
      36,
      233,
      43,
      240,
      254,
      57,
      251,
      78,
      51,
      195,
      98,
      205,
      108,
      61,
      66,
      16,
      213,
      19,
      68,
      237,
      190,
      3,
      200,
      133,
      80,
      177,
      97,
      74,
      138,
      38,
      235,
      135,
      186,
      89,
      201,
      4,
      101,
      151,
      31,
      228,
      231,
      34,
      225,
      28,
      222,
      128,
      53,
      50,
      247,
    ],
    [
      137, 59, 92, 122, 52, 131, 79, 236, 94, 171, 141, 86, 169, 199, 248, 120,
      196, 168, 77, 71, 5, 198, 215, 230, 176, 87, 189, 206, 115, 76, 13, 216,
      197, 26, 183, 54, 250, 27, 109, 140, 147, 25, 96, 105, 30, 207, 241, 8,
      217, 40, 0, 35, 221, 191, 83, 132, 9, 144, 12, 91, 175, 65, 170, 149, 174,
      82, 102, 167, 62, 70, 44, 143, 10, 153, 160, 142, 188, 81, 146, 212, 15,
      162, 103, 163, 123, 48, 245, 116, 192, 14, 211, 126, 63, 180, 88, 155,
      224, 148, 134, 158, 119, 165, 130, 112, 166, 93, 125, 1, 11, 208, 150,
      100, 106, 194, 124, 2, 184, 75, 113, 104, 18, 210, 202, 111, 84, 223, 173,
      238, 41, 33, 154, 47, 244, 232, 249, 60, 164, 227, 253, 56, 157, 99, 179,
      6, 203, 110, 127, 152, 252, 55, 185, 73, 67, 219, 22, 156, 118, 234, 37,
      193, 90, 187, 181, 23, 220, 72, 255, 58, 204, 7, 107, 239, 42, 139, 159,
      95, 45, 242, 145, 172, 209, 121, 24, 21, 218, 246, 49, 46, 243, 178, 64,
      161, 117, 20, 214, 17, 114, 69, 182, 85, 229, 32, 129, 29, 226, 136, 39,
      36, 233, 43, 240, 254, 57, 251, 78, 51, 195, 98, 205, 108, 61, 66, 16,
      213, 19, 68, 237, 190, 3, 200, 133, 80, 177, 97, 74, 138, 38, 235, 135,
      186, 89, 201, 4, 101, 151, 31, 228, 231, 34, 225, 28, 222, 128, 53, 50,
      247,
    ]
  )
);
