const { controllerWrapper } = require('../../utils');

const register = require('./register');
const login = require('./login');
const current = require('./current');
const logout = require('./logout');
const subscriptionUser = require('./subscriptionUser');
const updateAvatar = require('./updateAvatar')

module.exports = {
    register: controllerWrapper(register),
    login: controllerWrapper(login),
    current: controllerWrapper(current),
    logout: controllerWrapper(logout),
    subscriptionUser: controllerWrapper(subscriptionUser),
    updateAvatar: controllerWrapper(updateAvatar),
}