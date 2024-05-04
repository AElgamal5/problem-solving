/**
 * 2306. Naming a Company
 * -----------------------
 * link: https://leetcode.com/problems/naming-a-company/
 */
//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------
/**
 * description: Time Limit Exceeded
 *
 * time : O(n^2)
 * space : O(n)
 */
function distinctNames1(ideas: string[]): number {
  const ideasSet = new Set<string>(ideas);
  const resultSet = new Set<string>();

  for (let i = 0; i < ideas.length; i++) {
    for (let j = i + 1; j < ideas.length; j++) {
      let [str1, str2]: [string, string] = swapFirstLetters(ideas[i], ideas[j]);
      if (!ideasSet.has(str1) && !ideasSet.has(str2)) {
        resultSet.add(`${str1} ${str2}`);
        resultSet.add(`${str2} ${str1}`);
      }
    }
  }

  return resultSet.size;
}

function swapFirstLetters(str1: string, str2: string): [string, string] {
  if (str1.length === 0 || str2.length === 0) {
    return [str1, str2];
  }

  let newStr1: string = str2[0] + str1.substring(1);
  let newStr2: string = str1[0] + str2.substring(1);

  return [newStr1, newStr2];
}
console.log(distinctNames(["coffee", "donuts", "time", "toffee"])); // 6
console.log(distinctNames(["coffee", "donuts", "time", "toffee", "cafe"])); // 10
console.log(distinctNames(["lack", "back"])); // 0

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------
/**
 * description:
 * 1.group the strings into group based on first char
 * 2. group1.size * group2.size * 2 => to get all possible unique names
 * 3. take care of duplicates
 *
 * time : O(n)
 * space : O(n)
 */
function distinctNames(ideas: string[]): number {
  const map: Map<string, Set<string>> = new Map();

  for (const idea of ideas) {
    if (map.has(idea[0])) {
      let set = map.get(idea[0]);
      if (set) {
        set.add(idea.substring(1));
        map.set(idea[0], set);
      }
    } else {
      let set = new Set<string>();
      set?.add(idea.substring(1));
      map.set(idea[0], set);
    }
  }

  let result = 0;

  let done = new Set<string>();
  map.forEach((value1, key1) => {
    map.forEach((value2, key2) => {
      if (key1 === key2) {
        return;
      }
      if (done.has(`${key1}${key2}`) || done.has(`${key2}${key1}`)) {
        return;
      }
      done.add(`${key1}${key2}`);
      console.log(value1, value2);

      let tempSet = new Set<string>([
        ...Array.from(value1),
        ...Array.from(value2),
      ]);
      if (tempSet.size === value1.size + value2.size) {
        result += value1.size * value2.size * 2;
      } else {
        result +=
          (tempSet.size - value1.size) * (tempSet.size - value2.size) * 2;
      }
    });
  });

  return result;
}
