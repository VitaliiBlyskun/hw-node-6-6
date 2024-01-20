const express = require("express");

const router = express.Router();

const { contactsController } = require("../../controllers");

const { validateBody, isValidId } = require("../../middlewares");

const { contactsSchema } = require("../../schemas");

router.get("/", contactsController.listContacts);

router.get("/:contactId", isValidId, contactsController.getContactById);

router.post("/", validateBody(contactsSchema.addContactSchema), contactsController.addContact);

router.delete("/:contactId", isValidId, contactsController.removeContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(contactsSchema.addContactSchema),
  contactsController.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(contactsSchema.updateFavoriteContactSchema),
  contactsController.updateStatusContact
);

module.exports = router;
