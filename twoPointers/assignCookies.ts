/**
 * 455. Assign Cookies
 * ---------------------------
 * link: https://leetcode.com/problems/assign-cookies/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: sort to arrays to ensure the greed and use the two pointers
 *
 * time : O(n)
 * space : O(n)
 */

function findContentChildren(g: number[], s: number[]): number {
  let result = 0;

  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let i = 0,
    j = 0;

  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      result++;
      i++;
    }
    j++;
  }

  return result;
}

console.log(findContentChildren([1, 2, 3], [1, 1])); // 1
console.log(findContentChildren([1, 2], [1, 2, 3])); // 2
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])); //2
console.log(findContentChildren([1, 2, 3], [3])); //1
