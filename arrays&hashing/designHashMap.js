/**
 * 706. Design HashMap
 * -----------------------
 * link: https://leetcode.com/problems/design-hashmap/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

//description: implement Built-in Map

class MyHashMap {
  constructor() {
    this.map = new Map();
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    this.map.set(key, value);
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    return this.map.get(key) === undefined ? -1 : this.map.get(key);
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    this.map.set(key, -1);
  }
}

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

//description: using arrays

class MyHashMap {
  constructor() {
    this.map = [];
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    this.map[key] = value;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    return this.map[key] === undefined ? -1 : this.map[key];
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    this.map[key] = undefined;
  }
}
