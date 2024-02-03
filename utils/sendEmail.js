const sendGridMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sendGridMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "vitaliy.bliskun@gmail.com" };
  await sendGridMail.send(email);
  return true;
};

module.exports = sendEmail;
