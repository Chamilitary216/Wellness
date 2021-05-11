//Requires our dependencies
const Validator = require('validator');
const isEmpty = require('is-empty');

//Exports our validator function and passes data from user input into it
module.exports = function validateLoginInput (data) {
    let errors = {};

    //Converts empty feilds into empty strings for our validation
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    //Validates email
    if(Validator.isEmpty(data.email)) {
        errors.email = 'An email is required!';
    } else if(!Validator.isEmail(data.email)) {
        errors.email = 'Invalid email address!';
    }
    //Validates password
    if(Validator.isEmpty(data.password)) {
        errors.password = 'A password is required!'
    }

    //Returns any errors and if errors is null, returns isValid
    return {
        errors,
        isValid: isEmpty(errors)
    };
};