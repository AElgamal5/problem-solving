/**
 * 1603. Design Parking System
 * -----------------------
 * link: https://leetcode.com/problems/design-parking-system/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

class ParkingSystem {
  /**
   * time : O(1)
   * space : O(1    )
   */

  /**
   * @param {number} big
   * @param {number} medium
   * @param {number} small
   */
  constructor(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }

  /**
   * time : O(1)
   * space : O(1)
   */

  /**
   * @param {number} carType
   * @return {boolean}
   */
  addCar(carType) {
    if (carType === 1 && this.big > 0) {
      this.big--;
      return true;
    } else if (carType === 2 && this.medium > 0) {
      this.medium--;
      return true;
    } else if (carType === 3 && this.small > 0) {
      this.small--;
      return true;
    }

    return false;
  }
}

let obj = new ParkingSystem(2, 1, 0);

console.log(obj.addCar(1));
console.log(obj.addCar(2));
console.log(obj.addCar(3));
console.log(obj.addCar(1));
