/**
 * 68. Text Justification
 * ---------------------------
 * link: https://leetcode.com/problems/text-justification/
 */

/**
 * description: 
 * 
 * time : O()
 * space : O()
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
    if (lineLength + word.length <= maxWidth) {
      if (lineLength !== 0) {
        line.push(" ");
        lineLength += 1;
      }
      line.push(word);
      lineLength += word.length;
    } else {
      result.push(line);
      lengths.push(lineLength);
      line = [word];
      lineLength = word.length;
    }
  }
  result.push(line);
  lengths.push(lineLength);

  console.log(result);
  console.log(lengths);

  for (let i = 0; i < result.length; i++) {
    result[i] = lineJoin(result[i], lengths[i], maxWidth);
  }

  return result;
};

let lineJoin = function (line, lineLength, maxWidth) {
  let extraSpaces = maxWidth - lineLength;
  let gaps = Math.floor(line.length / 2);
  console.log(gaps, extraSpaces);
  let result = "";

  for (const word of line) {
    if (word !== " ") {
      result += word;
      continue;
    }

    if (extraSpaces <= gaps) {
      result += "  ";
      extraSpaces--;
      gaps--;
    } else {
      let spaces = Math.ceil(extraSpaces / gaps);
      result += " ".repeat(spaces);
      extraSpaces -= spaces;
      gaps--;
    }
  }

  if (extraSpaces > 0) {
    result += " ".repeat(extraSpaces);
  }

  return result;
};

let words = ["This", "is", "an", "example", "of", "text", "justification."];
let maxWidth = 16;
console.log(fullJustify(words, maxWidth));
// [
//     "This    is    an",
//     "example  of text",
//     "justification.  "
// ]

words = ["What", "must", "be", "acknowledgment", "shall", "be"];
maxWidth = 16;
console.log(fullJustify(words, maxWidth));
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
