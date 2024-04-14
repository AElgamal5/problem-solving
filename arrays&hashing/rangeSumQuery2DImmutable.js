/**
 * 304. Range Sum Query 2D - Immutable
 * -----------------------
 * link: https://leetcode.com/problems/range-sum-query-2d-immutable/
 */

//---------------------------------------------------------------
//------------------------1st trial------------------------------
//---------------------------------------------------------------

/**
 * description: using hash map to prevent calculation of duplicate inputs
 */

class NumMatrixOld {
  /**
   * @param {number[][]} matrix
   */
  constructor(matrix) {
    this.matrix = matrix;
    this.sumMap = new Map();
  }

  /**
   * @param {number} row1
   * @param {number} col1
   * @param {number} row2
   * @param {number} col2
   * @return {number}
   */
  sumRegion(row1, col1, row2, col2) {
    if (this.sumMap.has(`${row1}${col1}${row2}${col2}`)) {
      return this.sumMap.get(`${row1}${col1}${row2}${col2}`);
    }

    let sum = 0;

    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        sum += this.matrix[i][j];
      }
    }

    this.sumMap.set(`${row1}${col1}${row2}${col2}`, sum);

    return sum;
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

//---------------------------------------------------------------
//------------------------2nd trial------------------------------
//---------------------------------------------------------------

/**
 * description: using prefix sum pre row
 */
class NumMatrixOld2 {
  /**
   * time: O(n*m)
   * space: O(n*m)
   */
  /**
   * @param {number[][]} matrix
   */
  constructor(matrix) {
    this.prefixSums = new Array(matrix.length);
    for (let row = 0; row < this.prefixSums.length; row++) {
      this.prefixSums[row] = new Array(matrix[0].length);
    }

    for (let i = 0; i < matrix.length; i++) {
      let rowSum = 0;
      for (let j = 0; j < matrix[0].length; j++) {
        rowSum += matrix[i][j];
        this.prefixSums[i][j] = rowSum;
      }
    }
  }

  /**
   * time: O(n)
   * space: O(1)
   */
  /**
   * @param {number} row1
   * @param {number} col1
   * @param {number} row2
   * @param {number} col2
   * @return {number}
   */
  sumRegion(row1, col1, row2, col2) {
    let sum = 0;

    for (let i = row1; i <= row2; i++) {
      sum += this.prefixSums[i][col2] - (this.prefixSums[i][col1 - 1] || 0);
    }

    return sum;
  }
}

// let obj1 = new NumMatrix([
//   [3, 0, 1, 4, 2],
//   [5, 6, 3, 2, 1],
//   [1, 2, 0, 1, 5],
//   [4, 1, 0, 1, 7],
//   [1, 0, 3, 0, 5],
// ]);

// console.log(obj1.sumRegion(2, 1, 4, 3));
// console.log(obj1.sumRegion(1, 1, 2, 2));
// console.log(obj1.sumRegion(1, 2, 2, 4));

/**
 * description: using prefix sum
 * area([r1,c1], [r2,c2]) = area([0,0], [r2,c2]) - area([0,0], [r1-1,c2]) - area([0,0], [r2,c1-1]) + area([0,0], [r1-1,c1-1])
 */

class NumMatrix {
  /**
   * time: O(n*m)
   * space: O(n*m)
   */
  /**
   * @param {number[][]} matrix
   */
  constructor(matrix) {
    this.prefixSums = new Array(matrix.length);
    for (let row = 0; row < this.prefixSums.length; row++) {
      this.prefixSums[row] = new Array(matrix[0].length);
    }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        console.log(matrix[i - 1][j - 1]);
        this.prefixSums[i][j] =
          (matrix[i - 1][j - 1] || 0) +
          (matrix[i - 1][j] || 0) +
          (matrix[i][j - 1] || 0) -
          (matrix[i - 1][j - 1] || 0);
      }
    }
  }

  /**
   * time: O(n)
   * space: O(1)
   */
  /**
   * @param {number} row1
   * @param {number} col1
   * @param {number} row2
   * @param {number} col2
   * @return {number}
   */
  sumRegion(row1, col1, row2, col2) {
    return (
      this.prefixSums[row2][col2] -
      this.prefixSums[row2][col1] -
      this.prefixSums[row1][col2] +
      this.prefixSums[row1][col1]
    );
  }
}

let obj1 = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);

console.log(obj1.sumRegion(2, 1, 4, 3));
console.log(obj1.sumRegion(1, 1, 2, 2));
console.log(obj1.sumRegion(1, 2, 2, 4));
