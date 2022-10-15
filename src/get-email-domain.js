const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  let newArr = []
  for(let i = email.length-1;i>0;){
    if(email[i] !== '@'){
      i--;
    }else{
      while (i<email.length){
        i++
        newArr.push(email[i])
      }
      return newArr.join(' ').replace(/ /g,'');
    }
  }

}

module.exports = {
  getEmailDomain
};
