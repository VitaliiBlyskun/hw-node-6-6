const Joi = require("joi");

// const subscriptionList = ['starter', 'pro', 'business']

const subscriptionUserSchema = Joi.object({
    // subscription: Joi.string().valid(subscriptionList).required(),
    email: Joi.string().required(),
    subscription: Joi.string().valid('starter', 'pro', 'business').required(),
    // subscription: Joi.string().required(),
})

module.exports = subscriptionUserSchema