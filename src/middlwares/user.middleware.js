const { statusBadRequest, 
  displayNameInvalid, 
  emailInvalid,
  passwordInvalid, 
  statusConflict,
  userRegistred } = require('../utils/statusUtils');
const { invalidDisplayName,
  invalidEmail, 
  invalidPassword,
  existingEmail } = require('../utils/validationUtils');

const userMiddleware = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (invalidDisplayName(displayName)) {
    return res.status(statusBadRequest).json(displayNameInvalid);
  }
  if (invalidEmail(email)) {
    return res.status(statusBadRequest).json(emailInvalid);
  }
  if (invalidPassword(password)) {
    return res.status(statusBadRequest).json(passwordInvalid);
  }
  if (await existingEmail(email)) {
    return res.status(statusConflict).json(userRegistred);
  }
  return next();
};

module.exports = userMiddleware;