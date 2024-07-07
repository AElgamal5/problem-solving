/**
 * 844. Backspace String Compare
 * ---------------------------
 * link: https://leetcode.com/problems/backspace-string-compare/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: using stack technique
 *
 * time : O(n + m)
 * space : O(n + m)
 * where n is the length of first string and m is the length of the second string
 */

function backspaceCompare(s: string, t: string): boolean {
  let sArr: string[] = [];
  let tArr: string[] = [];

  for (const char of s) {
    if (char === "#") sArr.pop();
    else sArr.push(char);
  }

  for (const char of t) {
    if (char === "#") tArr.pop();
    else tArr.push(char);
  }

  return sArr.toString() === tArr.toString();
}

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: using two pointers and loop over strings from back to the start of the string
 *
 * time : O(n)
 * space : O(1)
 */

function backspaceCompare2(s: string, t: string): boolean {
  let i = s.length - 1;
  let j = t.length - 1;

  while (i > -1 || j > -1) {
    i = nextChar(s, i);
    j = nextChar(t, j);

    if ((s[i] ?? "") !== (t[j] ?? "")) return false;

    i--;
    j--;
  }

  return true;
}

function nextChar(str: string, index: number): number {
  let skip: number = 0;

  while (index > -1) {
    if (str[index] !== "#" && skip == 0) break;
    else if (str[index] !== "#") skip++;
    else skip--;
    index--;
  }

  return index;
}

console.log(backspaceCompare2("ab#c", "ad#c"));
console.log("=".repeat(30));
console.log(backspaceCompare2("ab##", "c#d#"));
console.log("=".repeat(30));
console.log(backspaceCompare2("a#c", "b"));
console.log("=".repeat(30));
console.log(backspaceCompare2("bxj##tw", "bxj###tw"));
