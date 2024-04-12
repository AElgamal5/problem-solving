/**
 * 380. Insert Delete GetRandom O(1)
 * -----------------------
 * link: https://leetcode.com/problems/insert-delete-getrandom-o1/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: using set to make sure that no duplicates
 */

var RandomizedSet = function () {
  this.set = new Set();
};

/**
 * time : O(1)
 * space : O(1)
 */

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.set.has(val)) {
    return false;
  }
  this.set.add(val);
  return true;
};

/**
 * time : O(1)
 * space : O(1)
 */

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.set.has(val)) {
    return false;
  }
  this.set.delete(val);
  return true;
};

/**
 * time : O(n)
 * space : O(n)
 */
/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let setValues = [...this.set];
  let randomIndex = Math.floor(Math.random() * setValues.length);
  return setValues[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()*/

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

/**
 * description:
 * 1- using map as value => index
 * 2- using array to get random number in O(1) by index
 */

class RandomizedSet {
  constructor() {
    this.map = new Map();
    this.arr = [];
  }

  /**
   * time : O(1)
   * space : O(1)
   */
  /**
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.map.has(val)) {
      return false;
    }
    this.map.set(val, this.arr.length);
    this.arr.push(val);
    return true;
  }

  /**
   * time : O(1)
   * space : O(1)
   */
  /**
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.map.has(val)) {
      return false;
    }
    let lastIndex = this.arr.length - 1;
    let valueIndex = this.map.get(val);
    this.arr[valueIndex] = this.arr[lastIndex];
    this.map.set(this.arr[valueIndex], valueIndex);
    this.map.delete(val);
    this.arr.pop();
    return true;
  }

  /**
   * time : O(1)
   * space : O(1)
   */
  /**
   * @return {number}
   */
  getRandom() {
    let randomIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIndex];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()*/
