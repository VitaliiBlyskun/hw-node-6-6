const { Contact } = require("../../models");

const addContact = async (request, response) => {
    const result = await Contact.create(request.body);
    response.status(201).json(result)
};

module.exports = addContact;