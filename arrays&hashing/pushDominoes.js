/**
 * 838. Push Dominoes
 * -----------------------
 * link: https://leetcode.com/problems/push-dominoes/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: follow rules of dominoes physics
 */

//time: O(n^2)
//space: O(1)

/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  if (dominoes.length === 1) return dominoes;

  for (let i = 0; i < dominoes.length; i++) {
    if (dominoes[i] !== ".") continue;

    let [left, right] = nearestMove(dominoes, i);

    if (left === -1 && right === -1) continue;

    if (left === -1 && dominoes[right] === "L") {
      dominoes = makeAMove(dominoes, i, "L");
    } else if (right === -1 && dominoes[left] === "R") {
      dominoes = makeAMove(dominoes, i, "R");
    } else if (i - left !== right - i) {
      if (i - left < right - i && dominoes[left] === "R") {
        dominoes = makeAMove(dominoes, i, dominoes[left]);
        dominoes = makeAMove(dominoes, right - 1, dominoes[right]);
      } else if (i - left > right - i && dominoes[right] === "L") {
        dominoes = makeAMove(dominoes, i, dominoes[right]);
        dominoes = makeAMove(dominoes, left + 1, dominoes[left]);
      } else if (dominoes[left] === dominoes[right]) {
        dominoes = makeAMove(dominoes, i, dominoes[right]);
      }
    } else if (dominoes[left] === dominoes[right]) {
      dominoes = makeAMove(dominoes, i, dominoes[right]);
    }
  }

  return dominoes;
};

/**
 * @param {string} dominoes
 * @param {number} index
 * @return {array}
 */
var nearestMove = function (dominoes, index) {
  let ans = [-1, -1];

  for (let i = index - 1; i > -1; i--) {
    if (ans[0] === -1 && (dominoes[i] === "L" || dominoes[i] === "R")) {
      ans[0] = i;
      break;
    }
  }

  for (let i = index + 1; i < dominoes.length; i++) {
    if (ans[1] === -1 && (dominoes[i] === "L" || dominoes[i] === "R")) {
      ans[1] = i;
      break;
    }
  }

  return ans;
};

/**
 * @param {string} dominoes
 * @param {number} index
 * @param {char} move
 * @return {array}
 */
function makeAMove(dominoes, i, move) {
  if (i < 0 || i >= dominoes.length) {
    return dominoes;
  }
  return dominoes.substring(0, i) + move + dominoes.substring(i + 1);
}

// console.log(pushDominoes("."));
// console.log(pushDominoes("L"));
// console.log(pushDominoes("R"));
// console.log(pushDominoes("R."));
// console.log(pushDominoes("L."));
// console.log(pushDominoes(".R"));
// console.log(pushDominoes(".L"));
// console.log(pushDominoes(".."));
// console.log(pushDominoes(".......L.L")); // LLLLLLLLLL
// console.log(pushDominoes("R..L..R..LR.R.R.....")); // RRLL..RRLLRRRRRRRRRR
// console.log(pushDominoes("R.R.L")); //RRR.L
// console.log(pushDominoes(".LR.")); // LLRR
// console.log(pushDominoes("RR.")); // RRR
// console.log(pushDominoes("RR.L")); // RR.L
// console.log(pushDominoes(".L.R...LR..L..")); // LL.RR.LLRRLL..

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

/**
 * description: reduce time of updating char in string by making it array of chars
 */

//time: O(n^2)
//space: O(n)

/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  if (dominoes.length === 1) return dominoes;

  let dominoesArr = [...dominoes];

  for (let i = 0; i < dominoesArr.length; i++) {
    if (dominoesArr[i] !== ".") continue;

    let [left, right] = nearestMove(dominoesArr, i);

    if (left === -1 && right === -1) continue;

    if (left === -1 && dominoesArr[right] === "L") {
      dominoesArr[i] = "L";
    } else if (right === -1 && dominoesArr[left] === "R") {
      dominoesArr[i] = "R";
    } else if (i - left !== right - i) {
      if (i - left < right - i && dominoesArr[left] === "R") {
        dominoesArr[i] = "R";
        dominoesArr[right - 1] = dominoesArr[right];
      } else if (i - left > right - i && dominoesArr[right] === "L") {
        dominoesArr[i] = "L";
        dominoesArr[left + 1] = dominoesArr[left];
      } else if (dominoesArr[left] === dominoesArr[right]) {
        dominoesArr[i] = dominoesArr[right];
      }
    } else if (dominoesArr[left] === dominoesArr[right]) {
      dominoesArr[i] = dominoesArr[right];
    }
  }

  return dominoesArr.join("");
};

/**
 * @param {string[]} dominoes
 * @param {number} index
 * @returns {number[]}
 */
var nearestMove = function (dominoes, index) {
  let ans = [-1, -1];

  for (let i = index - 1; i > -1; i--) {
    if (ans[0] === -1 && (dominoes[i] === "L" || dominoes[i] === "R")) {
      ans[0] = i;
      break;
    }
  }

  for (let i = index + 1; i < dominoes.length; i++) {
    if (ans[1] === -1 && (dominoes[i] === "L" || dominoes[i] === "R")) {
      ans[1] = i;
      break;
    }
  }

  return ans;
};

console.log(pushDominoes("."));
console.log(pushDominoes("L"));
console.log(pushDominoes("R"));
console.log(pushDominoes("R."));
console.log(pushDominoes("L."));
console.log(pushDominoes(".R"));
console.log(pushDominoes(".L"));
console.log(pushDominoes(".."));
console.log(pushDominoes(".......L.L")); // LLLLLLLLLL
console.log(pushDominoes("R..L..R..LR.R.R.....")); // RRLL..RRLLRRRRRRRRRR
console.log(pushDominoes("R.R.L")); //RRR.L
console.log(pushDominoes(".LR.")); // LLRR
console.log(pushDominoes("RR.")); // RRR
console.log(pushDominoes("RR.L")); // RR.L
console.log(pushDominoes(".L.R...LR..L..")); // LL.RR.LLRRLL..
