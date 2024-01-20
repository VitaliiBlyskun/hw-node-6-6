const { Contact } = require("../../models");

const listContacts = async (request, response) => {
    const result = await Contact.find();
    response.json(result);
 
};

module.exports = listContacts;