const {NotImplementedError} = require('../extensions/index.js');
const {parsers} = require("mocha/lib/cli/config");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {

    if (date === undefined) {
        return 'Unable to determine the time of year!'
    }
    if (date === null || typeof date !== "number") {
        throw new NotImplementedError('Invalid date!');
    }
    if (date.getMonth() < 2 || date.getMonth() === 11) {
        return 'winter'

    }
    if (date.getMonth() < 5 && date.getMonth() > 1) {
        return 'spring'
    }
    if (date.getMonth() < 8 && date.getMonth() > 4) {
        return 'summer'
    }
    if (date.getMonth() < 11 && date.getMonth() > 7) {
        return 'autumn'
    }

}

module.exports = {
    getSeason
};
