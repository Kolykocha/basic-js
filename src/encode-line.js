const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let newArr = []
  let sum = 1
  for(let i =0;i<str.length;i++){
    if(str[i]===str[i+1]){
      sum++
    }else if(sum===1 && str[i]!==str[i+1]){
      newArr.push(str[i])
    }else{
      newArr.push(sum)
      sum=1;
      newArr.push(str[i])
    }
  }
  return newArr.join('')
}

module.exports = {
  encodeLine
};
