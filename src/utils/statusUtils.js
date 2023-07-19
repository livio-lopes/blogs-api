const statusBadRequest = 400;
const statusConflict = 409;
const statusOk = 200;
const statusCreated = 201;

const invalidFields = { message: 'Invalid fields' };
const missingField = { message: 'Some required fields are missing' };
const displayNameInvalid = {
  message: '"displayName" length must be at least 8 characters long',
};
const emailInvalid = {
  message: '"email" must be a valid email',
};
const passwordInvalid = {
  message: '"password" length must be at least 6 characters long',
};

const userRegistred = {
  message: 'User already registered',
};

module.exports = {
  invalidFields,
  missingField,
  displayNameInvalid,
  statusBadRequest,
  statusOk,
  emailInvalid,
  passwordInvalid,
  userRegistred,
  statusConflict,
  statusCreated,
};