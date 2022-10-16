const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let arr = [];


    if (options.repeatTimes !== 0 || options.additionSeparator !== 0) {
        for (let i = 0; i < options.repeatTimes; i++) {

            arr.push(str.toString())

            for (let j = 0; j < options.additionRepeatTimes; j++) {

                if (options.addition !== null) {
                    arr.push(options.addition)
                    if (options.additionSeparator === null) {
                            arr.push('|')
                    } else {
                        arr.push(options.additionSeparator)
                    }
                }

            }

            if(i<options.repeatTimes-1) {
                if (options.separator === undefined) {
                    arr.push('+')
                } else {
                    arr.push(options.separator)
                }
            }

        }

    }
    return arr.join('');
}

module.exports = {
    repeater
};
