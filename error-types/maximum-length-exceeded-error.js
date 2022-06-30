const ValidationError = require('./validation-error');

// Your code here

class MaximumLengthExceededError extends ValidationError {

  constructor(difference, message = "Maximum length exceeded", ...params) {

    super(...params);

    // if (Error.captureStackTrace) {
    //   Error.captureStackTrace(this, MaximumLengthExceededError);
    // }

    this.name = "MaximumLengthExceededError";
    this.message = message;

    if (difference) {
      this.message += ` by ${difference}`;
    }

  }


}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
