const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  let arr=matrix;
  for (let i = 0; i < options.repeatTimes; i++) {
    for (let j = 0; j < options.repeatTimes; j++) {
      if (arr[i][j + 1] === true) {
        arr[i][j] = 2
      } else if (arr[i+1][j] === true){
        arr[i][j] = 2
      }else if (arr[i+1][j] === true && arr[i][j+1] === true){
        arr[i][j] = 3
      }else {
        arr[i][j] = 1;
      }
    }
  }
}

module.exports = {
  minesweeper
};
