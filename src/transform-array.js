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
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    /*if (arr === null) {
        throw new NotImplementedError('\'arr\' parameter must be an instance of the Array!');
    }
    for (let i = 0; i < arr.length;i++) {
        if(i===0 || i===arr.length){
            arr.splice(i , 1);
        }
        if (arr[i] === '--discard-next') {
            arr.splice(i + 1, 1);
            arr.splice(i , 1);
        }
        if (arr[i] === '--discard-prev') {
            arr.splice(i - 1, 1)
            arr.splice(i, 1);
        }
        if (arr[i] === '--double-next') {
            arr[i] = arr[i + 1];
        }
        if (arr[i] === '--double-prev') {
            arr[i] = arr[i - 1];

        }
        i++;
    }
    return arr;*/
}

module.exports = {
    transform
};
