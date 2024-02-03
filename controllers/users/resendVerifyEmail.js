const { User } = require("../../models");
const { HttpError, sendEmail } = require("../../utils");

const { BASE_URL } = process.env;

const resendVerifyEmail = async (request, response) => {
  const { email } = request.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, "User not found");
  }
  if (user.verify) {
    throw HttpError(404, "Verification has already been passed");
  }
  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blanc" href="${BASE_URL}/api/users/verify/${user.verificationToken}"> Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  response.status(200).json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyEmail;
