/**
 * 1662. Check If Two String Arrays are Equivalent
 * ---------------------------
 * link: https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: using built-in function 'join'
 *
 * time : O(n)
 * space : O(n)
 */

function arrayStringsAreEqualOld(word1: string[], word2: string[]): boolean {
  return word1.join("") === word2.join("");
}

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

/**
 * description: using two pointers
 *
 * time : O(n)
 * space : O(1)
 */

function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let charIndex1 = 0,
    charIndex2 = 0,
    wordIndex1 = 0,
    wordIndex2 = 0,
    wordLength1 = word1.length,
    wordLength2 = word2.length;

  while (wordIndex1 < wordLength1 && wordIndex2 < wordLength2) {
    if (word1[wordIndex1][charIndex1] !== word2[wordIndex2][charIndex2])
      return false;

    if (charIndex1 < word1[wordIndex1].length - 1) charIndex1++;
    else {
      wordIndex1++;
      charIndex1 = 0;
    }

    if (charIndex2 < word2[wordIndex2].length - 1) charIndex2++;
    else {
      wordIndex2++;
      charIndex2 = 0;
    }
  }

  return wordIndex1 === wordLength1 && wordIndex2 === wordLength2;
}

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
console.log("=".repeat(20));
console.log(arrayStringsAreEqual(["a", "cb"], ["a", "bc"]));
console.log("=".repeat(20));
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
console.log("=".repeat(20));
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddef"]));
console.log("=".repeat(20));
console.log(arrayStringsAreEqual(["a"], ["a", "b"]));
