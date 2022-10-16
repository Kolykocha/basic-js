const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (arr === null) {
        throw new NotImplementedError('\'arr\' parameter must be an instance of the Array!');
    }
    for (let i = 0; i < arr.length;i++) {
        if(i===0 || i===arr.length){
            arr.splice(i , 1);
        }
        if (arr[i-1] === '--discard-next') {
            arr.splice(i , 1);
            arr.splice(i -1, 1);
        }else if(arr[arr.length-1]==='--discard-next'){
            arr.pop()
        }
        if (arr[i-1] === '--discard-prev') {
            arr.splice(i -1, 1)
            arr.splice(i-2, 1);
        }else if(arr[0]==='--discard-prev'){
            arr.shift()
        }
        if (arr[i] === '--double-next') {
            arr[i] = arr[i + 1];
        }else if(arr[arr.length-1]==='--double-next'){
                arr.pop()
        }
        if (arr[i] === '--double-prev') {
            arr[i] = arr[i - 1];
        }
        else if(arr[0]==='--double-prev'){
             arr.shift()
        }
        i++;
    }
    return arr;
}

module.exports = {
    transform
};
