/**
 * 68. Text Justification
 * ---------------------------
 * link: https://leetcode.com/problems/text-justification/
 */

/**
 * description:
 * 1. split words into line based on max width
 * 2. count no of spaces should be added when joining the line back to one string
 *
 * time : O(n^2)
 * space : O(n)
 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
let fullJustify = function (words, maxWidth) {
  let result = [];
  let lengths = [];
  let line = [];
  let lineLength = 0;

  for (const word of words) {
    let wordLength = word.length;
    if (lineLength > 0) wordLength++;

    if (lineLength + wordLength <= maxWidth) {
      if (lineLength !== 0) {
        line.push(" ");
      }
      line.push(word);
      lineLength += wordLength;
    } else {
      result.push(line);
      lengths.push(lineLength);
      line = [word];
      lineLength = --wordLength;
    }
  }
  result.push(line);
  lengths.push(lineLength);

  for (let i = 0; i < result.length; i++) {
    result[i] = lineJoin(
      result[i],
      lengths[i],
      maxWidth,
      i < result.length - 1
    );
  }

  return result;
};

/**
 * @param {string[]} line
 * @param {number} lineLength
 * @param {number} maxWidth
 * @param {boolean} isMidLine
 * @return {string}
 */
let lineJoin = function (line, lineLength, maxWidth, isMidLine) {
  let extraSpaces = maxWidth - lineLength;
  let gaps = Math.floor(line.length / 2);
  let result = "";

  let spaceArr = new Array(gaps).fill("");
  let i = 0;
  while (isMidLine && gaps > 0 && extraSpaces > 0) {
    spaceArr[i] += " ";
    extraSpaces--;
    i++;
    if (i === spaceArr.length) {
      i = 0;
    }
  }
  i = 0;

  for (const word of line) {
    if (word !== " ") {
      result += word;
      continue;
    }
    result += " ";
    result += spaceArr[i];
    i++;
  }

  if (extraSpaces > 0) {
    result += " ".repeat(extraSpaces);
  }

  return result;
};

let words = ["This", "is", "an", "example", "of", "text", "justification."];
let maxWidth = 16;
console.log(fullJustify(words, maxWidth));
console.log("=".repeat(30));
// [
//     "This    is    an",
//     "example  of text",
//     "justification.  "
// ]

words = ["What", "must", "be", "acknowledgment", "shall", "be"];
maxWidth = 16;
console.log(fullJustify(words, maxWidth));
console.log("=".repeat(30));
// [
//     "What   must   be",
//     "acknowledgment  ",
//     "shall be        "
// ]

words = [
  "Science",
  "is",
  "what",
  "we",
  "understand",
  "well",
  "enough",
  "to",
  "explain",
  "to",
  "a",
  "computer.",
  "Art",
  "is",
  "everything",
  "else",
  "we",
  "do",
];
maxWidth = 20;
console.log(fullJustify(words, maxWidth));
// [
//     "Science  is  what we",
//     "understand      well",
//     "enough to explain to",
//     "a  computer.  Art is",
//     "everything  else  we",
//     "do                  "
// ]
