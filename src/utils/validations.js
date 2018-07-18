import * as validator from 'validator';

export const isValidEmail = (email) => {
    return validator.isEmail(email);
}

export const isValidPassword = (password) => {
    return validator.isLength(password, {
        min: 6,
        max: 12
    });
}

export default validator;