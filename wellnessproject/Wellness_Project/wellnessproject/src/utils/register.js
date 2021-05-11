//Require our dependencies
const Validator = require('validator');
const isEmpty = require('is-empty');

//Exports out validation funtction with data from user input
module.exports = function validateRegisterInput (data) {
    let errors = {};
    //Turns empty feilds into an empty string for our validator
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    
    //Validates name
    if(Validator.isEmpty(data.name)) {
        errors.name = 'A name is required!';
    }
    //Validates email    
    if(Validator.isEmpty(data.email)) {
        errors.email = 'An email is required!';
    } else if(!Validator.isEmail(data.email)) {
        errors.email = 'Incorrect email address!'
    }
    //Validates password
    if(Validator.isEmpty(data.password)) {
        errors.password = 'A password is required!';
    }
    //Validates password confirmation
    if(Validator.isEmpty(data.password2)) {
        errors.password2 = 'Must confirm password!';
    }
    //Validates password length
    if(!Validator.isLength(data.password, { min: 6, max: 15})) {
        errors.password = 'Password must have 6 to 15 charecters!';
    }
    //Validates that password and password confirmation match
    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords do not match!';
    }
    //Will return any errors, if errors are null wil return isValid
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
