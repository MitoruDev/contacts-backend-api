//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create a new contact
//@route POST /api/contacts
//@access Public
const createContact = (req, res) => {
  res.status(201).json({ message: "Create contact" });
};

//@desc Get a contact
//@route GET /api/contacts/:id
//@access Public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
