const statusBadRequest = 400;
const statusConflict = 409;
const statusOk = 200;
const statusCreated = 201;
const statusUnauthorized = 401;
const statusNotFound = 404;

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

const tokenNotFound = {
  message: 'Token not found',
};

const tokenInvalid = {
  message: 'Expired or invalid token',
};

const userNoExist = {
  message: 'User does not exist',
};

const userUnauthorizad = {
  message: 'Unauthorized user',
};
const nameRequired = {
  message: '"name" is required',
};

const categoryIdNotFound = {
  message: 'one or more "categoryIds" not found',
};

const postNoExist = {
  message: 'Post does not exist',
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
  tokenInvalid,
  tokenNotFound,
  statusUnauthorized,
  statusNotFound,
  userNoExist,
  nameRequired,
  categoryIdNotFound,
  postNoExist,
  userUnauthorizad,
};