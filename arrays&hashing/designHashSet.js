/**
 * 705. Design HashSet
 * -----------------------
 * link: https://leetcode.com/problems/design-hashset
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description: implement Built-in Set

class MyHashSet {
  constructor() {
    this.set = new Set();
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    this.set.add(key);
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    this.set.delete(key);
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    return this.set.has(key);
  }
}

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//description: using arrays

class MyHashSet {
  constructor() {
    this.set = [];
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    this.set[key] = true;
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    this.set[key] = false;
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    return this.set[key] === true ? true : false;
  }
}
