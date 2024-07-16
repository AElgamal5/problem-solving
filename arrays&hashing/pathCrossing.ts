/**
 * 1496. Path Crossing
 * ---------------------------
 * link: https://leetcode.com/problems/path-crossing/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: keep track each point to check if crossed
 *
 * time : O(n)
 * space : O(n)
 */

function isPathCrossing(path: string): boolean {
  let set = new Set<string>();

  let x = 0,
    y = 0;

  set.add(`${y},${x}`);

  for (const move of path) {
    if (move === "E") x++;
    else if (move === "W") x--;
    else if (move === "N") y++;
    else if (move === "S") y--;

    if (set.has(`${y},${x}`)) return true;
    else set.add(`${y},${x}`);
  }

  return false;
}

console.log(isPathCrossing("NES"));
console.log("=".repeat(30));
console.log(isPathCrossing("NESWW"));
