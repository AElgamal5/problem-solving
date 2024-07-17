/**
 * 1758. Minimum Changes To Make Alternating Binary String
 * ---------------------------
 * link: https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: make the only two 'Alternating Binary String' with the givin length and count the difference
 *
 * time : O(2n)
 * space : O(2n)
 */
function minOperationsOld(s: string): number {
  let length = s.length;
  let style1 = "0";
  let style2 = "1";

  for (let i = 1; i < length; i++) {
    if (style1[i - 1] === "0") style1 += "1";
    else style1 += "0";

    if (style2[i - 1] === "0") style2 += "1";
    else style2 += "0";
  }

  let style1Diff = 0;
  let style2Diff = 0;

  for (let i = 0; i < length; i++) {
    if (style1[i] !== s[i]) style1Diff++;
    if (style2[i] !== s[i]) style2Diff++;
  }

  return Math.min(style1Diff, style2Diff);
}

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

/**
 * description: reduce space from O(2n) to O(n)
 *
 * time : O(2n)
 * space : O(n)
 */
function minOperationsOld2(s: string): number {
  let length = s.length;
  let alternating = "0";

  for (let i = 1; i < length; i++) {
    if (alternating[i - 1] === "0") alternating += "1";
    else alternating += "0";
  }

  let style1Diff = 0;
  let style2Diff = 0;

  for (let i = 0; i < length; i++) {
    if (alternating[i] !== s[i]) style1Diff++;
    if (alternating[i] === s[i]) style2Diff++;
  }

  return Math.min(style1Diff, style2Diff);
}

//---------------------------------------------------------------
//------------------------3rd trial------------------------------
//---------------------------------------------------------------

/**
 * description: reduce runtime from O(2n) to O(n)
 *
 * time : O(n)
 * space : O(n)
 */
function minOperationsOld3(s: string): number {
  let alternating = "0";
  let style1Diff = 0;
  let style2Diff = 0;

  if (s.startsWith("0")) style1Diff++;
  else style2Diff++;

  for (let i = 1; i < s.length; i++) {
    if (alternating[i - 1] === "0") alternating += "1";
    else alternating += "0";

    if (alternating[i] === s[i]) style1Diff++;
    else style2Diff++;
  }

  return Math.min(style1Diff, style2Diff);
}

//---------------------------------------------------------------
//------------------------4th trial------------------------------
//---------------------------------------------------------------

/**
 * description: with extra memory
 *
 * time : O(n)
 * space : O(1)
 */
function minOperations(s: string): number {
  let char = "0";
  let style1Diff = 0;
  let style2Diff = 0;

  if (s.startsWith("0")) style1Diff++;
  else style2Diff++;

  for (let i = 1; i < s.length; i++) {
    if (char === "0") char = "1";
    else char = "0";

    if (char === s[i]) style1Diff++;
    else style2Diff++;
  }

  return Math.min(style1Diff, style2Diff);
}

console.log(minOperations("0100"));
console.log("=".repeat(30));
console.log(minOperations("10"));
console.log("=".repeat(30));
console.log(minOperations("1111"));
