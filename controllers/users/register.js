const bcrypt = require("bcrypt");
const { User } = require("../../models");

const { HttpError } = require("../../utils");

const register = async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPasswort = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    ...request.body,
    password: hashPasswort,
  });
  response.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
