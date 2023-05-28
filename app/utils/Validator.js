const Validator = require('validatorjs');

const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,12}$/
const passwordRegex = /^[a-zA-Z][a-zA-Z0-9_]{6,12}$/
const wpasswordRegex = /^[a-zA-Z][a-zA-Z0-9_]{6,12}$/

Validator.register('usernameRegex',value=>usernameRegex.test(value),'Username can only contain letters,numbers and _ only and must be 6 to 20 char ');
Validator.register('agentRegex',value=>agentRegex.test(value),'Invalid agent id');
Validator.register('passwordRegex',value=>passwordRegex.test(value),'Password can only contain letters,numbers and _ only and must be 6 to 12 char ');
Validator.register('wpasswordRegex',value=>wpasswordRegex.test(value),'Withdraw password can only contain letters,numbers and _ only and must be 6 to 12 char ');

const validator = async (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};
module.exports = validator;