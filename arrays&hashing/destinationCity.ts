/**
 * 1436. Destination City
 * ---------------------------
 * link: https://leetcode.com/problems/destination-city/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 * 1- create a map: key -> source and value -> destination
 * 2- loop over map to using destination as source get last destination
 *
 * time : O(n)
 * space : O(n)
 */

function destCity(paths: string[][]): string {
  const map = new Map<string, string>();

  let destination = paths[0][0];

  for (const path of paths) {
    map.set(path[0], path[1]);
  }

  for (let i = 0; i < map.size; i++) {
    if (map.has(destination)) destination = map.get(destination)!;
    else break;
  }

  return destination;
}

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);

console.log(
  destCity([
    ["B", "C"],
    ["D", "B"],
    ["C", "A"],
  ])
);
